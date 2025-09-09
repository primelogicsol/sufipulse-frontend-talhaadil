"use client";

import { useState, useEffect, useRef } from "react";
import { Bell, X } from "lucide-react";
import Link from "next/link";
import { getUserNotifications, markNotificationAsRead } from "@/services/notifications";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";

// Define Notification interface to resolve type errors
export interface Notification {
  id: number;
  title: string;
  read: boolean;
  created_at?: string;
}

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const basePath = pathname.includes("/writer") ? "writer" : "vocalist";

  useEffect(() => {
    const fetchNotifications = async () => {
      setLoading(true);
      try {
        const response = await getUserNotifications();
        const allNotifications = response.data.notifications as Notification[];

        // Filter unread notifications and sort by ID in descending order
        const sortedNotifications = allNotifications
          .filter((notification) => !notification.read) // Only unread notifications
          .sort((a, b) => b.id - a.id) // Sort by ID descending
          .slice(0, 4); // Limit to 3-4 notifications
          console.log(sortedNotifications)

        setNotifications(sortedNotifications);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMarkAsRead = async (notificationId: number) => {
    try {
      const userId = Number.parseInt(Cookies.get("user_id") ?? "0");
      if (userId) {
        await markNotificationAsRead(notificationId, userId);
        setNotifications((prev) =>
          prev.filter((notification) => notification.id !== notificationId)
        );
      }
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-slate-500 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
      >
        <Bell className="h-5 w-5" />
        {notifications.length > 0 && (
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-emerald-900 rounded-full"></span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-slate-50 z-50">
          <div className="flex items-center justify-between p-4 border-b border-slate-50">
            <h3 className="text-lg font-semibold text-slate-900">
              Notifications
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-slate-50 rounded-md transition-colors"
            >
              <X className="h-4 w-4 text-slate-800" />
            </button>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {loading ? (
              <div className="p-4 text-center text-slate-800">
                Loading notifications...
              </div>
            ) : notifications.length === 0 ? (
              <div className="p-4 text-center text-slate-800">
                No unread notifications
              </div>
            ) : (
              <div className="divide-y divide-slate-50">
                {notifications.map((notification) => {
                  const formattedDate = new Date(
                    notification.created_at ?? ""
                  ).toLocaleString("en-US", {
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  });

                  return (
                    <div
                      key={notification.id}
                      className="p-4 hover:bg-emerald-50 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-emerald-900">
                            {notification.title}
                          </p>
                          <p className="text-xs text-slate-800 mt-1">
                            {formattedDate}
                          </p>
                        </div>
                        <button
                          onClick={() => handleMarkAsRead(notification.id)}
                          className="text-xs text-emerald-900 hover:text-slate-900"
                        >
                          Mark as read
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-50">
            <Link
              href={`/${basePath}/notification`}
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-2 px-4 bg-emerald-900 text-white rounded-md hover:bg-slate-900 transition-colors text-sm font-medium"
            >
              View All Notifications
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}