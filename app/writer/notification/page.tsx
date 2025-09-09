"use client";

import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getUserNotifications,markNotificationAsRead } from "@/services/notifications";
import Cookies from "js-cookie";

interface Notification {
  id: number;
  message: string;
  created_at: string;
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      setLoading(true);
      try {
        const response = await getUserNotifications();
  
        const allNotifications = response.data.notifications as Notification[];
  
        // Sort by ID in descending order and take only first 4
        const sortedNotifications = allNotifications
          .sort((a, b) => b.id - a.id)
          .slice(0, 4);
  
        setNotifications(sortedNotifications);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchNotifications();
  }, []);
  

  const handleMarkAllAsRead = async () => {
    const userId = Cookies.get("user_id");
    if (!userId) {
      console.error("User ID not found in cookies");
      return;
    }

    try {
      const markPromises = notifications.map((notification) =>
        markNotificationAsRead(notification.id, parseInt(userId))
      );
      const responses = await Promise.all(markPromises);
      console.log("All notifications marked as read:", responses);
      // Update notifications to reflect read status (assuming API doesn't return updated data)
      setNotifications([]);
    } catch (error) {
      console.error("Error marking notifications as read:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex items-center gap-4 mb-6">
        <Link
          href="/user/dashboard"
          className="p-2 hover:bg-emerald-50 rounded-md transition-colors"
        >
          <ArrowLeft className="h-5 w-5 text-emerald-900" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            All Notifications
          </h1>
          <p className="text-slate-800 mt-1">
            {notifications.length} notification
            {notifications.length !== 1 ? "s" : ""} found
          </p>
        </div>
      </div>

      <div className="flex justify-end mb-4">
        <button
          onClick={handleMarkAllAsRead}
          className="bg-emerald-900 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition-colors disabled:opacity-50"
          disabled={notifications.length === 0}
        >
          Mark All as Read
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-900"></div>
        </div>
      ) : notifications.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-slate-800 mb-2">No notifications found</div>
          <p className="text-sm text-slate-900">
            You&apos;ll see notifications here when they&apos;re available
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {notifications.map((notification) => {
  const formattedDate = new Date(notification.created_at ?? "");
  return (
    <div
      key={notification.id}
      className="bg-white border border-slate-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          {/* Title */}
          <p className="text-lg font-semibold text-emerald-900 mb-1">
            {notification.title}
          </p>

          {/* Message */}
          <p className="text-slate-900 font-medium mb-2">
            {notification.message}
          </p>

          {/* Date */}
          <span className="text-xs text-slate-800">
            {formattedDate.toLocaleDateString()}{" "}
            {formattedDate.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      </div>
    </div>
  );
})}

        </div>
      )}
    </div>
  );
}