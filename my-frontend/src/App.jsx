import React, { useState, useEffect } from 'react';
   import axios from 'axios';
   import './index.css';

   function App() {
     const [data, setData] = useState({
       summary: [],
       education: [],
       experience: [],
       certifications: [],
       projects: [],
       skills: [],
     });
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     useEffect(() => {
       const endpoints = ['summary', 'education', 'experience', 'certifications', 'projects', 'skills'];
       Promise.all(endpoints.map(endpoint => axios.get(`http://localhost:8000/api/${endpoint}/`)))
         .then(responses => {
           setData({
             summary: responses[0].data,
             education: responses[1].data,
             experience: responses[2].data,
             certifications: responses[3].data,
             projects: responses[4].data,
             skills: responses[5].data,
           });
           setLoading(false);
         })
         .catch(err => {
           setError(err.message);
           setLoading(false);
         });
     }, []);

     if (loading) return <div className="text-white text-center mt-10">Loading...</div>;
     if (error) return <div className="text-red-500 text-center mt-10">Error: {error}</div>;

     return (
       <div className="bg-gray-900 text-white min-h-screen font-sans">
         <header className="bg-black p-6 shadow-lg sticky top-0 z-10">
           <h1 className="text-4xl font-bold text-center">Muhammad Ahmad</h1>
           <p className="text-lg text-gray-400 text-center">Software & DevOps Engineer | Machine Learning Enthusiast</p>
         </header>
         <main className="max-w-5xl mx-auto p-6 space-y-12">
           <section className="bg-gray-800 p-8 rounded-lg shadow-md">
             <h2 className="text-2xl font-semibold text-gray-200 mb-4">Summary</h2>
             <p className="text-gray-300">{data.summary[0]?.content || "Motivated Software Engineer with expertise in DevOps, CI/CD pipelines, and Machine Learning. Passionate about building scalable solutions and accelerating software delivery."}</p>
           </section>
           <section className="bg-gray-800 p-8 rounded-lg shadow-md">
             <h2 className="text-2xl font-semibold text-gray-200 mb-4">Education</h2>
             {data.education.map((edu, index) => (
               <div key={index} className="mb-6">
                 <h3 className="text-xl font-medium text-gray-300">{edu.degree}</h3>
                 <p className="text-gray-400">{edu.institution}</p>
                 <p className="text-gray-500 text-sm">{edu.start_date} - {edu.end_date || "Present"}</p>
                 <p className="text-gray-400">{edu.description}</p>
               </div>
             ))}
           </section>
           <section className="bg-gray-800 p-8 rounded-lg shadow-md">
             <h2 className="text-2xl font-semibold text-gray-200 mb-4">Work Experience</h2>
             {data.experience.map((exp, index) => (
               <div key={index} className="mb-6">
                 <h3 className="text-xl font-medium text-gray-300">{exp.position} at {exp.company}</h3>
                 <p className="text-gray-500 text-sm">{exp.start_date} - {exp.end_date || "Present"}</p>
                 <p className="text-gray-400">{exp.description}</p>
               </div>
             ))}
           </section>
           <section className="bg-gray-800 p-8 rounded-lg shadow-md">
             <h2 className="text-2xl font-semibold text-gray-200 mb-4">Certifications</h2>
             <ul className="list-disc list-inside text-gray-300">
               {data.certifications.map((cert, index) => (
                 <li key={index} className="mb-2">{cert.name} - {cert.issuing_organization} ({cert.date_earned})</li>
               ))}
             </ul>
           </section>
           <section className="bg-gray-800 p-8 rounded-lg shadow-md">
             <h2 className="text-2xl font-semibold text-gray-200 mb-4">Projects</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {data.projects.map((proj, index) => (
                 <div key={index} className="bg-gray-700 p-4 rounded-lg">
                   <h3 className="text-xl font-medium text-gray-300">{proj.name}</h3>
                   <p className="text-gray-400">{proj.description}</p>
                 </div>
               ))}
             </div>
           </section>
           <section className="bg-gray-800 p-8 rounded-lg shadow-md">
             <h2 className="text-2xl font-semibold text-gray-200 mb-4">Skills</h2>
             <div className="flex flex-wrap gap-3">
               {data.skills.map((skill, index) => (
                 <span key={index} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">{skill.name}</span>
               ))}
             </div>
           </section>
         </main>
         <footer className="bg-black p-6 text-center text-gray-400">
           <p>&copy; 2025 Muhammad Ahmad. All rights reserved.</p>
         </footer>
       </div>
     );
   }

   export default App;