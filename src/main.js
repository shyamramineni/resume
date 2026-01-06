import './../style.css'
import data from './data.json'

document.querySelector('#app').innerHTML = `
  <div class="max-w-6xl mx-auto my-10 bg-white shadow-2xl overflow-hidden rounded-lg print:my-0 print:shadow-none print:max-w-none print:rounded-none">
    
    <!-- Header / Hero Section -->
    <div class="bg-primary text-white p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 print:px-8 print:pt-8 print:pb-2 print:gap-4 print:flex-row print:justify-start print:items-center">
      <div class="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 print:block">
        <img src="${data.profile.avatar}" alt="${data.profile.name}" class="w-full h-full object-cover rounded-full border-4 border-white shadow-lg">
      </div>
      <div class="flex-grow text-center md:text-left print:text-left">
        <h1 class="text-2xl md:text-3xl font-bold mb-2 print:text-xl print:mb-1">${data.profile.name}</h1>
        <h3 class="text-lg font-light text-blue-200 mb-4 print:text-base print:text-gray-600 print:mb-2">${data.profile.title}</h3>
        <p class="text-blue-100 leading-relaxed max-w-3xl text-xs print:text-gray-700 print:mb-2">
          ${data.profile.summary}
        </p>
        
        <div class="mt-4 flex flex-wrap justify-center md:justify-start gap-3 text-xs font-medium print:hidden">
           <div class="flex items-center gap-2 bg-blue-800 px-3 py-1 rounded-full">
             <span>📧</span> ${data.contact.email}
           </div>
           <div class="flex items-center gap-2 bg-blue-800 px-3 py-1 rounded-full">
             <span>📱</span> ${data.contact.phone}
           </div>
           <div class="flex items-center gap-2 bg-blue-800 px-3 py-1 rounded-full">
             <span>📍</span> ${data.contact.location}
           </div>
           <a href="${data.contact.linkedin.url}" target="_blank" class="flex items-center gap-2 bg-blue-800 px-3 py-1 rounded-full hover:bg-blue-700 transition">
             <span>🔗</span> ${data.contact.linkedin.display}
           </a>
        </div>
      </div>
    </div>

    <!-- Print-only separate Contact Section -->
    <div class="hidden print:flex print:flex-row print:flex-nowrap print:w-full print:px-8 print:py-2 print:justify-between print:items-center print:text-xs print:text-gray-800 print:border-b print:border-gray-200 print:mb-2">
       <div class="flex items-center gap-2">
         <span>📧</span> ${data.contact.email}
       </div>
       <div class="flex items-center gap-2">
         <span>📱</span> ${data.contact.phone}
       </div>
       <div class="flex items-center gap-2">
         <span>📍</span> ${data.contact.location}
       </div>
       <div class="flex items-center gap-2">
         <span>🔗</span> ${data.contact.linkedin.display}
       </div>
    </div>

    <div class="flex flex-col md:flex-row">
      
      <!-- Main Content (Experience) -->
      <div class="w-full md:w-2/3 p-6 md:p-8 print:px-8 print:pt-2">
        <h2 class="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200 uppercase tracking-wide">Work Experience</h2>
        
        ${data.experience.map(job => `
          <div class="relative pl-6 pb-6 border-l-2 border-gray-200 last:border-0 last:pb-0">
             <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-${job.color} ring-4 ring-white"></div>
             <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h3 class="text-base font-bold text-gray-800">${job.role}</h3>
                <span class="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">${job.period}</span>
             </div>
             <div class="text-primary font-semibold mb-1 text-xs">${job.company}</div>
             ${job.location ? `<div class="text-[10px] text-gray-500 mb-2">${job.location}</div>` : '<div class="mb-2"></div>'}
             <ul class="list-disc list-outside ml-4 space-y-0.5 text-gray-600 text-xs">
               ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
             </ul>
          </div>
        `).join('')}

      </div>

      <!-- Sidebar -->
      <div class="w-full md:w-1/3 bg-gray-50 p-6 md:p-8 border-t md:border-t-0 md:border-l border-gray-200 print:px-8 print:pt-2">
        
        <!-- Skills -->
        <div class="mb-6">
          <h2 class="text-base font-bold text-gray-800 mb-4 uppercase tracking-wider border-b-2 border-secondary pb-1">Skills</h2>
          <div class="flex flex-wrap gap-2 text-[10px]">
            ${data.skills.map(skill => `
              <span class="px-2 py-1 bg-white border border-gray-300 rounded text-gray-700 font-medium shadow-sm">${skill}</span>
            `).join('')}
          </div>
        </div>

        <!-- Certificates -->
        <div class="mb-6">
          <h2 class="text-base font-bold text-gray-800 mb-4 uppercase tracking-wider border-b-2 border-secondary pb-1">Certificates</h2>
          <ul class="space-y-2 text-xs">
            ${data.certificates.map(cert => `
              <li class="bg-white p-2 rounded border border-gray-200 shadow-sm">
                <div class="font-semibold text-gray-800">${cert.name}</div>
                ${cert.meta ? `<div class="text-[10px] text-gray-500">${cert.meta}</div>` : ''}
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Education -->
        <div>
          <h2 class="text-base font-bold text-gray-800 mb-4 uppercase tracking-wider border-b-2 border-secondary pb-1">Education</h2>
          ${data.education.map(edu => `
            <div class="mb-2">
               <h3 class="font-semibold text-gray-800 text-xs">${edu.degree}</h3>
               <div class="text-primary font-medium text-[10px]">${edu.school}</div>
               <div class="text-[10px] text-gray-500 mt-0.5">${edu.period}</div>
            </div>
          `).join('')}
        </div>

      </div>
    </div>
    
    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-400 text-center p-3 text-[10px]">
      <p>&copy; 2024 ${data.profile.name}. All rights reserved.</p>
    </footer>
  </div>
`
