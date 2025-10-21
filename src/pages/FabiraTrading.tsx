"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, BookOpen, Handshake, Plane, Users, Video, MessageCircle, Gift, UserPlus } from "lucide-react"

interface Event {
  id: string
  title: string
  description: string
  date: string
  location: string
  price: string
  image: string
  category: "formation" | "evenement" | "voyage" | "reseau"
  featured?: boolean
}

export default function EventPage() {
  const [currentEventSlide, setCurrentEventSlide] = useState(0)
  const [activeTab, setActiveTab] = useState("evenements")
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 23,
    minutes: 59,
    seconds: 13,
  })

  const events: Event[] = [
    {
      id: "1",
      title: "Formation Entrepreneuriat Digital",
      description: "Maîtrisez les outils numériques pour développer votre entreprise en Afrique",
      date: "15-17 Mars 2024",
      location: "Dakar, Sénégal",
      price: "Gratuit pour les membres",
      image:
        "https://res.cloudinary.com/drxouwbms/image/upload/v1755782417/360_F_821553966_khVu9EC8bwgtCrGFJXon1Sbpm7WRINLm_cncxf1.jpg",
      category: "formation",
      featured: true,
    },
    {
      id: "2",
      title: "Salon International du Commerce Africain",
      description: "Rencontrez des partenaires commerciaux de toute l'Afrique",
      date: "22-24 Avril 2024",
      location: "Abidjan, Côte d'Ivoire",
      price: "50,000 FCFA",
      image:
        "https://res.cloudinary.com/drxouwbms/image/upload/v1755782417/360_F_821553966_khVu9EC8bwgtCrGFJXon1Sbpm7WRINLm_cncxf1.jpg",
      category: "evenement",
      featured: true,
    },
    {
      id: "3",
      title: "Voyage d'Affaires Ghana",
      description: "Découvrez les opportunités commerciales au Ghana",
      date: "10-15 Mai 2024",
      location: "Accra, Ghana",
      price: "150,000 FCFA",
      image:
        "https://res.cloudinary.com/drxouwbms/image/upload/v1755782417/360_F_821553966_khVu9EC8bwgtCrGFJXon1Sbpm7WRINLm_cncxf1.jpg",
      category: "voyage",
      featured: true,
    },
  ]

  const featuredEvents = events.filter((event) => event.featured)

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Event slider effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentEventSlide((prev) => (prev + 1) % featuredEvents.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [featuredEvents.length])

  const nextSlide = () => {
    setCurrentEventSlide((prev) => (prev + 1) % featuredEvents.length)
  }

  const prevSlide = () => {
    setCurrentEventSlide((prev) => (prev - 1 + featuredEvents.length) % featuredEvents.length)
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "formation":
        return <BookOpen size={20} />
      case "evenement":
        return <Calendar size={20} />
      case "voyage":
        return <Plane size={20} />
      case "reseau":
        return <Handshake size={20} />
      default:
        return <Calendar size={20} />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "formation":
        return "bg-green-500"
      case "evenement":
        return "bg-emerald-500"
      case "voyage":
        return "bg-teal-500"
      case "reseau":
        return "bg-green-600"
      default:
        return "bg-gray-500"
    }
  }

  const tabs = [
    { id: "evenements", label: "Événements", icon: <Calendar size={20} /> },
    { id: "formations", label: "Formations", icon: <BookOpen size={20} /> },
    { id: "voyages", label: "Voyages", icon: <Plane size={20} /> },
    { id: "reseau", label: "Réseautage", icon: <Handshake size={20} /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
     

      {/* Navigation */}
    

      {/* Hero Section with Circular Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 py-20 lg:py-32">
        {/* Circular Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-3xl"></div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 border-[40px] border-green-500/30 rounded-full"></div>
        <div className="absolute left-12 top-1/2 -translate-y-1/2 w-48 h-48 border-[30px] border-emerald-500/20 rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="mb-4">
                <span className="text-white/90 text-lg font-medium">UPCOMING NEW</span>
                <span className="text-blue-700 text-lg font-bold ml-2">EVENT 2024</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                STARTUP <span className="text-blue-700">GLOBAL</span>
                <br />
                CONFERENCE
              </h1>

              <div className="flex flex-col gap-4 mb-8 text-white">
                <div className="flex items-center gap-3">
                  <Calendar className="text-blue-700" size={20} />
                  <span className="font-medium">22 - 24 APRIL 2024</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-700" size={20} />
                  <span className="font-medium">QUEENWAY MALL 4207 ROAD, USA</span>
                </div>
              </div>

              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all"
                >
                  PURCHASE TICKET
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
                >
                  VIEW SCHEDULE
                </motion.button>
              </div>
            </motion.div>

            {/* Right Content - Image with Circular Background */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 bg-green-500/30 rounded-full"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-emerald-500/40 rounded-full"></div>
              </div>
              <div className="relative rounded-2xl z-10">
                <img src="https://res.cloudinary.com/drxouwbms/image/upload/v1761007112/550730286_1313994720521956_8087267794175090440_n_ep1zqv.jpg" alt="Professional" className="relative z-10 mx-auto" />
              </div>
            </motion.div>
          </div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 lg:mt-16"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl mx-auto">
              <div className="grid grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-blue-500 mb-2">
                    {String(timeLeft.days).padStart(2, "0")}
                  </div>
                  <div className="text-gray-600 font-medium">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-blue-500 mb-2">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </div>
                  <div className="text-gray-600 font-medium">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-blue-500 mb-2">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </div>
                  <div className="text-gray-600 font-medium">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-blue-500 mb-2">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </div>
                  <div className="text-gray-600 font-medium">Seconds</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-4">
                <span className="text-blue-500 font-bold text-sm uppercase tracking-wider">OVERVIEW</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                GET THE LATEST INFO
                <br />
                ABOUT <span className="text-blue-500">EVENTEN</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>

              {/* Info Boxes */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">WHERE</h3>
                    <p className="text-gray-600 text-sm">Birmingham City Park</p>
                    <p className="text-gray-600 text-sm">UK, London, UK</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">WHEN</h3>
                    <p className="text-gray-600 text-sm">Wednesday To Thursday</p>
                    <p className="text-gray-600 text-sm">April 21- 25, 2023</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Image Collage */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://res.cloudinary.com/drxouwbms/image/upload/v1761007337/550600056_1313994950521933_1869437596081245730_n_pbacxv.jpg"
                    alt="Conference"
                    className="rounded-2xl w-full h-48 object-cover shadow-lg"
                  />
                  <img
                    src="https://res.cloudinary.com/drxouwbms/image/upload/v1761007339/565786717_1336252354962859_1985780906287098859_n_y2bytb.jpg"
                    className="rounded-2xl w-full h-64 object-cover shadow-lg"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="https://res.cloudinary.com/drxouwbms/image/upload/v1761007338/564588375_1333689695219125_1236379824575896133_n_mx5xm7.jpg"
                    alt="Networking"
                    className="rounded-2xl w-full h-64 object-cover shadow-lg"
                  />
                  <img
                    src="https://res.cloudinary.com/drxouwbms/image/upload/v1761007339/567969247_1336251754962919_5977842988856518838_n_vv9ixu.jpg"
                    alt="Presentation"
                    className="rounded-2xl w-full h-48 object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <span className="text-blue-500 font-bold text-sm uppercase tracking-wider">OUR PARTNERS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            SPONSORS AND <span className="text-blue-500">PARTNERS</span>
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>

          {/* Sponsor Logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <div
                key={i}
                className="flex items-center justify-center p-6 bg-white rounded-xl hover:shadow-lg transition-shadow"
              >
                <img
                  src={`/generic-company-logo.png?height=80&width=120&query=company logo ${i}`}
                  alt={`Sponsor ${i}`}
                  className="max-w-full h-auto opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all"
          >
            VIEW MORE SPONSORS
          </motion.button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-green-700 via-emerald-700 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Speakers" },
              { number: "850+", label: "Attendance" },
              { number: "10+", label: "Workshops" },
              { number: "300+", label: "Journalists" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold mb-3">{stat.number}</div>
                <div className="text-white/90 font-medium text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-green-800 via-emerald-900 to-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Video size={32} />,
                title: "LIVE STREAMING",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
              },
              {
                icon: <MessageCircle size={32} />,
                title: "FIRESIDE CHATS",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
              },
              {
                icon: <Users size={32} />,
                title: "NETWORKING",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
              },
              {
                icon: <BookOpen size={32} />,
                title: "HIGH VALUE LEARNING",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
              },
              {
                icon: <Gift size={32} />,
                title: "EXISTING GIVEWAYS",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
              },
              {
                icon: <UserPlus size={32} />,
                title: "1-ON-1 SESSIONS",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-all"
              >
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/80 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
