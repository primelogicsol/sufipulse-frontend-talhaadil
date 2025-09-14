import React from 'react';
import Link from 'next/link';
import { 
  Heart, 
  Mountain, 
  Users, 
  Award, 
  Star, 
  BookOpen, 
  ArrowRight,
  Building,
  Compass,
  Shield,
  Target,
  CheckCircle,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Leaf,
  Eye,
  Globe,
  GraduationCap,
  Lightbulb,
  Home,
  Utensils,
  Flame, // Added for "From Medicine to Mystical"
  Moon, // Added for "14 Years of Silence"
  Brain, // Added for "Sufi Guide for New Generation"
  FlaskConical,
  Bird,
  BirdIcon, // Added for "Sufi Science Center"
} from 'lucide-react';
import { FaDove } from 'react-icons/fa';

const DrKumarFoundation = () => {
  const spiritualJourney = [
    {
      phase: "Medical Training",
      period: "Early Years",
      description: "Trained in modern medicine at Government Medical College Srinagar, served as Block Medical Officer",
      icon: Shield
    },
    {
      phase: "The Great Renunciation",
      period: "The Turning Point",
      description: "Left worldly titles and salaries, answering the call of Divine Love (Ishq-e-Haqiqi)",
      icon: Heart
    },
    {
      phase: "14 Years of Silence",
      period: "Sacred Transformation",
      description: "Lived in Muraqaba in the jungles of Ganderbal - absorption, poverty, and truth",
      icon: Mountain
    },
    {
      phase: "Birth of a Qalandar",
      period: "Spiritual Emergence",
      description: "Returned transformed - detached, unveiled, filled with the fragrance of the unseen",
      icon: Star
    }
  ];

  const bandayBaghServices = [
    {
      icon: Utensils,
      title: "Langar",
      description: "Free sacred meals for the body and the soul",
      details: "No fees, no rejection, only acceptance"
    },
    {
      icon: Eye,
      title: "Meditation Center",
      description: "A sanctuary for Zikr and deep reflection",
      details: "Sacred space for spiritual practice"
    },
    {
      icon: Home,
      title: "Lodging for Travelers",
      description: "Accommodation for seekers and pilgrims",
      details: "Open doors for all spiritual travelers"
    },
    {
      icon: Heart,
      title: "Spiritual Guidance",
      description: "Direct teachings and presence of the Qalandar",
      details: "Transformative encounters with divine wisdom"
    }
  ];

  const sscInitiatives = [
    {
      icon: BookOpen,
      title: "Kashmiri Sufi Archives",
      description: "Digitized, translated, and revived sacred texts",
      impact: "Preserving mystical heritage"
    },
    {
      icon: Lightbulb,
      title: "Interdisciplinary Research",
      description: "Exploring links between Sufism, consciousness, and ethics",
      impact: "Bridging ancient wisdom and modern understanding"
    },
    {
      icon: GraduationCap,
      title: "Youth Programs",
      description: "Immersive experiences for the seekers of tomorrow",
      impact: "Awakening the next generation"
    },
    {
      icon: Globe,
      title: "Global Scholar Network",
      description: "Bridging science and spirituality on one sacred path",
      impact: "Worldwide spiritual collaboration"
    }
  ];

  const foundationSupports = [
    "SufiPulse productions and global outreach",
    "Research fellowships for spiritual scholars",
    "Spiritual literature and awareness campaigns",
    "Global mystic collaboration initiatives"
  ];

  const stats = [
    { number: "14", label: "Years of Silence", description: "Sacred transformation period" },
    { number: "1", label: "Qalandar", description: "The wandering light of Kashmir" },
    { number: "∞", label: "Hearts Touched", description: "Immeasurable spiritual impact" },
    { number: "USA", label: "Foundation", description: "Carrying the light across oceans" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mountain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Dr. Kumar Foundation USA
            </h1>
            <h2 className="text-2xl lg:text-3xl text-emerald-300 font-light italic mb-8">
              Qalandar-i-Kashmir – The Wandering Light, The Hidden Pearl of Kashmir
            </h2>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 max-w-5xl mx-auto">
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                In the sacred history of Kashmir — where mystics have roamed like silent rivers of divine remembrance — 
                one soul emerged beyond the veil of time: <strong className="text-emerald-300">Dr. Ghulam Mohammad Kumar</strong>, 
                lovingly known as Mama Ji or Kumar Sahib, the Qalandar of Kashmir.
              </p>
              <blockquote className="text-2xl font-light italic text-emerald-300 mb-4">
                "More than a man, more than a mystic — he is a presence."
              </blockquote>
              <p className="text-slate-300">
                A wandering flame of Haqiqat, a silent earthquake in the hearts of seekers. 
                He lives not to be followed, but to awaken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-slate-800 mb-1">{stat.label}</div>
                <div className="text-sm text-slate-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* From Medicine to Mystical */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 flex items-center justify-center">
              <Flame className="w-8 h-8 text-emerald-600 mr-2" />
              From Medicine to the Mystical
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Born into an esteemed Kashmiri family of scholars and professionals, Dr. Kumar trained in modern medicine 
                at Government Medical College Srinagar and rose to become a Block Medical Officer. But his heart could not 
                be contained by clinics and contracts.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                The call of Divine Love (Ishq-e-Haqiqi) shattered all worldly boundaries — and he walked away.
              </p>
              <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                <p className="text-emerald-800 font-medium text-center">
                  He left the world of titles and salaries.<br />
                  And walked into the wild — toward Fana, the annihilation in Allah.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-emerald-100 to-slate-100 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3">The Great Renunciation</h4>
                  <p className="text-slate-600 text-sm">
                    From worldly success to spiritual seeking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Journey Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 flex items-center justify-center">
              <Moon className="w-8 h-8 text-emerald-600 mr-2" />
              14 Years of Silence — The Birth of a Qalandar
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              In the jungles of Ganderbal, he entered a sacred silence. For fourteen years, he lived in Muraqaba — 
              in absorption, in poverty, in truth.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-200 hidden lg:block"></div>
            <div className="space-y-12">
              {spiritualJourney.map((phase, index) => (
                <div key={index} className={`flex items-center relative ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-100">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                          <phase.icon className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-800">{phase.phase}</h3>
                          <p className="text-emerald-600 font-medium">{phase.period}</p>
                        </div>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{phase.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
                  <div className="w-full lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-slate-800 rounded-2xl p-8 text-white max-w-3xl mx-auto">
              <blockquote className="text-2xl font-light italic text-emerald-300 mb-4">
                "To sit in his presence is to feel the tremors of spiritual awakening.<br />
                To look into his eyes is to glimpse eternity."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Banday Bagh */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 flex items-center justify-center">
              <FaDove className="w-8 h-8 text-emerald-600 mr-2" />
              Banday Bagh — The Spiritual Station
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              In the lush valley of Serch Banday Bagh (Ganderbal), where the winds whisper with the voices of saints, 
              Dr. Kumar's spiritual maqam serves as a beacon for broken hearts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {bandayBaghServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-2">{service.description}</p>
                  <p className="text-emerald-600 text-xs font-medium">{service.details}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-emerald-800 mb-4">Sacred Truth</h3>
              <p className="text-emerald-700 font-medium">
                Banday Bagh is not a place. It is a turning point.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Sufi Guide */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 flex items-center justify-center">
              <Brain className="w-8 h-8 text-emerald-600 mr-2" />
              A Sufi Guide for the New Generation
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Where old Sufi languages seemed distant, Dr. Kumar built a new bridge.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>He speaks in scientific codes and mystic signals, mixing timeless truth with modern reason.</p>
                <p>He does not reject intellect — he sanctifies it.</p>
                <p>He does not avoid science — he transforms it into divine reflection.</p>
              </div>
              <div className="bg-slate-800 rounded-xl p-6 text-white">
                <blockquote className="text-xl font-light italic text-emerald-300">
                  "His words are not poetry. They are lightning bolts of awakening."
                </blockquote>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 text-center">
                <Lightbulb className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <h4 className="font-bold text-slate-800 mb-2">Scientific Approach</h4>
                <p className="text-sm text-slate-600">Modern reasoning meets ancient wisdom</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 text-center">
                <Heart className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <h4 className="font-bold text-slate-800 mb-2">Sanctified Intellect</h4>
                <p className="text-sm text-slate-600">Transforming knowledge into divine reflection</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 text-center">
                <Users className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <h4 className="font-bold text-slate-800 mb-2">New Generation</h4>
                <p className="text-sm text-slate-600">Bridging traditional and contemporary seekers</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 text-center">
                <Star className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <h4 className="font-bold text-slate-800 mb-2">Lightning Awakening</h4>
                <p className="text-sm text-slate-600">Words that transform consciousness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sufi Science Center */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 flex items-center justify-center">
              <FlaskConical className="w-8 h-8 text-emerald-600 mr-2" />
              The Sufi Science Center (SSC) — A Revolution in Thought
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              To honor and spread his teachings, the Sufi Science Center was born — 
              a spiritual think tank, a technological sanctuary, a metaphysical research lab.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {sscInitiatives.map((initiative, index) => {
              const Icon = initiative.icon;
              return (
                <div key={index} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
                  <Icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-slate-800 mb-3">{initiative.title}</h3>
                  <p className="text-slate-600 text-sm mb-3 leading-relaxed">{initiative.description}</p>
                  <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    {initiative.impact}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <div className="bg-slate-800 rounded-2xl p-8 text-white max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-emerald-300 mb-4">Sacred Declaration</h3>
              <p className="text-slate-300 font-medium">
                The SSC is not just an institution. It is a metaphysical uprising.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation USA */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 flex items-center justify-center">
              <Globe className="w-8 h-8 text-emerald-600 mr-2" />
              Dr. Kumar Foundation USA — A Light Across Oceans
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              To carry his vision beyond the borders of Kashmir, one of Dr. Kumar's American students 
              established the Dr. Kumar Foundation USA.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800">A Sanctuary for Seekers in the West</h3>
              <p className="text-slate-600 leading-relaxed">
                The foundation supports spiritual awakening and mystical understanding across America, 
                serving as a bridge between Eastern wisdom and Western seeking.
              </p>
              <div className="space-y-3">
                {foundationSupports.map((support, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" />
                    <span className="text-slate-600">{support}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <div className="text-center mb-6">
                <Globe className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-slate-800 mb-3">Sacred Sustainability</h4>
              </div>
              <p className="text-slate-600 text-center leading-relaxed">
                With no sponsors, no donations, and no commercialization — 
                it sustains itself through love, longing, and labor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to the Seeker */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 flex items-center justify-center">
            <Star className="w-8 h-8 text-emerald-300 mr-2" />
            A Call to the Seeker
          </h2>
          
          <div className="space-y-6 mb-12">
            <p className="text-xl text-slate-300">To the restless soul…</p>
            <p className="text-xl text-slate-300">To the one who feels the world is not enough…</p>
            <p className="text-xl text-slate-300">To the one who hears the silence between words…</p>
          </div>

          <div className="bg-slate-700 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-emerald-300 mb-4">This is your moment. This is your path.</h3>
            <p className="text-slate-300 text-lg">The caravan of truth has begun to move.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              <Leaf className="w-5 h-5" />
              <span>Join the journey</span>
            </Link>
            <Link
              href="/sufi-science-center"
              className="inline-flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              <Eye className="w-5 h-5" />
              <span>Seek the light</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 border-2 border-slate-600 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              <Heart className="w-5 h-5" />
              <span>Be the voice of the unseen</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DrKumarFoundation;