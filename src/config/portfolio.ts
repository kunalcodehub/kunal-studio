// Portfolio Configuration
// Update these values to personalize your portfolio

import profilePhoto from '../assets/kunal_photo.png';

export const portfolioConfig = {
  // Personal Info
  name: 'Kunal Sharma',
  title: 'Full Stack Developer',
  tagline: 'Crafting Digital Excellence',
  position: 'Senior Software Engineer',
  company: 'Walmart',
  
  // Profile Photo
  // Option 1: Use a URL (recommended for external images)
  // profilePhoto: 'https://your-image-url.com/photo.jpg',
  // 
  // Option 2: Use a local image in /public folder
  // profilePhoto: '/profile-photo.jpg',
  //
  // Using local asset (replace with your own photo in src/assets/)
  profilePhoto: profilePhoto as string | null,
  
  // Fallback emoji if no photo is set
  profileEmoji: '👨‍💻',
  
  // Social Links
  social: {
    github: 'https://github.com/kunalcodehub',
    linkedin: 'https://www.linkedin.com/in/ssharmakunal',
    twitter: 'https://twitter.com',
    email: 'mailto:codewithkunal01@gmail.com',
  },
  
  // Contact Info
  contact: {
    email: 'codewithkunal01@gmail.com',
    phone: '+91 7275750386',
    location: 'Bangalore, India',
  },
  
  // Resume/CV
  resumeFile: '/Kunal_Sharma_CV.pdf',
  
  // WhatsApp
  whatsapp: {
    number: '+917275750386', // Replace with your WhatsApp number (include country code)
    defaultMessage: 'Hi! I found your portfolio and would like to connect with you.',
  },
};

export default portfolioConfig;
