import './../style.css'
import data from './data.json'

document.querySelector('#app').innerHTML = `
  <div class="max-w-6xl mx-auto my-10 bg-white shadow-2xl overflow-hidden rounded-lg print:my-0 print:shadow-none print:max-w-none print:rounded-none">
    
    <!-- Header / Hero Section -->
    <div class="bg-primary text-white p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 print:p-4 print:gap-3 print:flex-row print:justify-start print:items-center">
      <div class="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 print:block rounded-full border-4 border-white shadow-lg overflow-hidden print:w-24 print:h-24">
        <img src="${data.profile.avatar}" alt="${data.profile.name}" class="w-full h-full object-cover object-center">
      </div>
      <div class="flex-grow text-center md:text-left print:text-left">
        <h1 class="text-2xl md:text-3xl font-bold mb-2 text-white print:text-xl print:mb-0">${data.profile.name}</h1>
        <h3 class="text-lg font-light text-gray-300 mb-4 print:text-gray-300 print:mb-1 print:text-base">${data.profile.title}</h3>
        <p class="text-gray-200 leading-relaxed max-w-3xl text-xs print:text-gray-200 print:mb-1 print:text-[10px]">
          ${data.profile.summary}
        </p>
        
        <div class="mt-4 flex flex-wrap justify-center md:justify-start gap-3 text-xs font-medium print:flex print:justify-start print:gap-2 print:mt-2">
           <div class="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded-full print:px-2 print:py-0.5">
             <span>📧</span> ${data.contact.email}
           </div>
           <div class="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded-full print:px-2 print:py-0.5">
             <span>📱</span> ${data.contact.phone}
           </div>
           <div class="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded-full print:px-2 print:py-0.5">
             <span>📍</span> ${data.contact.location}
           </div>
           <a href="${data.contact.linkedin.url}" target="_blank" class="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-600 transition print:px-2 print:py-0.5">
             <span>🔗</span> ${data.contact.linkedin.display}
           </a>
        </div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row print:flex-row">
      
      <!-- Main Content (Experience) -->
      <div class="w-full md:w-2/3 p-6 md:p-8 print:px-4 print:pt-2 print:w-2/3">
        <h2 class="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200 uppercase tracking-wide print:mb-2 print:pb-1 print:text-base">Work Experience</h2>
        
        ${data.experience.map(job => `
          <div class="relative pl-6 pb-6 border-l-2 border-gray-200 last:border-0 last:pb-0 print:pb-3">
             <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-${job.color} ring-4 ring-white print:w-3 print:h-3 print:-left-[7px]"></div>
             <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1 print:mb-0">
                <h3 class="text-base font-bold text-gray-800 print:text-sm">${job.role}</h3>
                <span class="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded print:py-0.5">${job.period}</span>
             </div>
             <div class="text-primary font-semibold mb-1 text-xs print:mb-0">${job.company}</div>
             ${job.location ? `<div class="text-[10px] text-gray-500 mb-2 print:mb-1">${job.location}</div>` : '<div class="mb-2 print:mb-1"></div>'}
             <ul class="list-disc list-outside ml-4 space-y-0.5 text-gray-600 text-xs print:text-[10px]">
               ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
             </ul>
          </div>
        `).join('')}

      </div>

      <!-- Sidebar -->
      <div class="w-full md:w-1/3 bg-gray-50 p-6 md:p-8 border-t md:border-t-0 md:border-l border-gray-200 print:px-4 print:pt-2 print:w-1/3 print:border-t-0 print:border-l">
        
        <!-- Skills -->
        <div class="mb-6 print:mb-4">
          <h2 class="text-base font-bold text-gray-800 mb-4 uppercase tracking-wider border-b-2 border-secondary pb-1 print:mb-2 print:pb-0.5 print:text-sm">Skills</h2>
          <div class="flex flex-wrap gap-2 text-[10px]">
            ${data.skills.map(skill => `
              <span class="px-2 py-1 bg-white border border-gray-300 rounded text-gray-700 font-medium shadow-sm print:px-1.5 print:py-0.5">${skill}</span>
            `).join('')}
          </div>
        </div>

        <!-- Certificates -->
        <div class="mb-6 print:mb-4">
          <h2 class="text-base font-bold text-gray-800 mb-4 uppercase tracking-wider border-b-2 border-secondary pb-1 print:mb-2 print:pb-0.5 print:text-sm">Certificates</h2>
          <ul class="space-y-2 text-xs print:space-y-1">
            ${data.certificates.map(cert => `
              <li class="bg-white p-2 rounded border border-gray-200 shadow-sm print:p-1.5">
                <div class="font-semibold text-gray-800">${cert.name}</div>
                ${cert.meta ? `<div class="text-[10px] text-gray-500">${cert.meta}</div>` : ''}
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Education -->
        <div>
          <h2 class="text-base font-bold text-gray-800 mb-4 uppercase tracking-wider border-b-2 border-secondary pb-1 print:mb-2 print:pb-0.5 print:text-sm">Education</h2>
          ${data.education.map(edu => `
            <div class="mb-2 print:mb-1">
               <h3 class="font-semibold text-gray-800 text-xs">${edu.degree}</h3>
               <div class="text-primary font-medium text-[10px]">${edu.school}</div>
               <div class="text-[10px] text-gray-500 mt-0.5">${edu.period}</div>
            </div>
          `).join('')}
        </div>

      </div>
    </div>
    
    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-400 text-center p-3 text-[10px] print:hidden">
      <p>&copy; 2024 ${data.profile.name}. All rights reserved.</p>
    </footer>
  </div>

`
