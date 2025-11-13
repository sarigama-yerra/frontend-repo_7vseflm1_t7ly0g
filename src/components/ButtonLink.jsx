import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function ButtonLink({ href, label, icon: Icon, gradient = 'from-blue-600 to-indigo-600' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r ${gradient} text-white px-4 py-2 text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200`}
    >
      {Icon && <Icon size={18} className="opacity-90" />}
      <span>{label}</span>
      <ArrowUpRight size={16} className="opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
    </a>
  )
}
