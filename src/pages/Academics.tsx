
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { BookOpen } from "lucide-react";
import EducationCard from "@/components/EducationCard";
import CertificationCard from "@/components/CertificationCard";

const Academics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const education = [
    {
      id: 1,
      institution: "Bachelor of Computer Applications",
      degree: "Nicolaus Copernicus University in Torun",
      field: "Software Development, Algorithms, Databases, Web Technologies",
      duration: "2013 – 2017",
      location: "Torun, Poland",
      gpa: "4.5",
      details: [
        "Completed comprehensive coursework in software development, algorithms, data structures, databases, and modern web technologies.",
        "Gained hands-on experience through multiple practical projects and internships, applying theoretical knowledge to real-world challenges.",
      ]
    }
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4">
              Academics
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="Educational Background" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                Completed rigorous science-focused secondary education; earned Bachelor of Computer Applications from Nicolaus Copernicus University in Torun with strong practical experience.
              </p>
            </div>
          </motion.div>

          {/* Education Cards */}
          <div className="mb-24">

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
              {education.map((edu, index) => (
                <EducationCard
                  key={edu.id}
                  institution={edu.institution}
                  degree={edu.degree}
                  field={edu.field}
                  duration={edu.duration}
                  location={edu.location}
                  gpa={edu.gpa}
                  details={edu.details}
                  index={index}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Academics;
