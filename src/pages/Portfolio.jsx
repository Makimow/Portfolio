import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [cv, setCv] = useState(null);

  useEffect(() => {
    fetch("/cv.json")
      .then((res) => res.json())
      .then((data) => setCv(data))
      .catch((err) => {
        console.error("Erreur chargement cv.json", err);
      });
  }, []);

  if (!cv) return <div className="text-center text-gray-400 mt-10">Chargement du CV...</div>;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="p-8 text-center border-b border-gray-800">
        <motion.h1
          className="text-4xl font-bold text-violet-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {cv.alias}
        </motion.h1>
        <p className="text-lg text-gray-400">{cv.title}</p>
        <p className="mt-2 text-green-400">{cv.objective}</p>
      </header>

      {/* Profil */}
      <section className="max-w-4xl mx-auto p-8">
        <h2 className="text-2xl font-semibold text-violet-300 mb-4">Profil</h2>
        <p className="text-gray-300 leading-relaxed">{cv.profile}</p>
      </section>

      {/* Expériences */}
      <section className="max-w-4xl mx-auto p-8">
        <h2 className="text-2xl font-semibold text-violet-300 mb-4">Expériences professionnelles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {cv.experience.map((exp, idx) => (
            <Card key={idx} className="bg-gray-900 border-gray-800">
              <CardContent className="p-4">
                <h3 className="text-green-400 font-semibold">{exp.role}</h3>
                <p className="text-gray-400">{exp.company}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projets */}
      <section className="max-w-4xl mx-auto p-8">
        <h2 className="text-2xl font-semibold text-violet-300 mb-4">Projets</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {cv.projects.map((proj, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.03 }} className="cursor-pointer">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-4">
                  <h3 className="text-green-400 font-semibold">{proj.title} <span className="text-gray-500 text-sm">({proj.year})</span></h3>
                  <p className="text-gray-400 text-sm mb-2">{proj.description}</p>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-400 hover:underline"
                  >
                    Voir le projet →
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Compétences */}
      <section className="max-w-4xl mx-auto p-8">
        <h2 className="text-2xl font-semibold text-violet-300 mb-4">Compétences</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-green-400 mb-2">Techniques</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {cv.skills.techniques.map((skill, idx) => <li key={idx}>{skill}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-green-400 mb-2">Générales</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {cv.skills.generales.map((skill, idx) => <li key={idx}>{skill}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-4xl mx-auto p-8 text-center">
        <h2 className="text-2xl font-semibold text-violet-300 mb-4">Contact</h2>
        <p className="text-gray-300">📧 {cv.contact.email}</p>
        <p className="text-gray-300">📞 {cv.contact.phone}</p>
        <p className="text-gray-300">📍 {cv.contact.location}</p>
      </section>

      <footer className="text-center text-gray-500 py-6 border-t border-gray-800">
        <p>© {new Date().getFullYear()} {cv.alias} — Portfolio personnel</p>
      </footer>
    </div>
  );
}
