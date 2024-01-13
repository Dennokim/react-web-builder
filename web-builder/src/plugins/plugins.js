export const heroSectionBlock = {
  id: "hero-section",
  label: "Hero Section",
  content: `<div class="hero-section" style="height: 800px; width: 1200px; position: relative; display: flex; align-items: center; justify-content: center;">
               <div class="hero-content" style="text-align: center;">
                 <h1>Click to edit title</h1>
                 <p>Click to edit subtitle</p>
                 <button>Click to edit button</button>
               </div>
            </div>
    `,
  style: {
    '.hero-section': {
      'background-color': '#f0f0f0',
      'background-image': 'url("path/to/hero-image.jpg")',
      'background-size': 'cover',
      'background-position': 'center center',
    },
    '.hero-content h1': {
      color: '#000',
    },
    '.hero-content p': {
      color: '#000',
    },
    '.hero-content button': {
      padding: '10px 20px',
      'font-size': '16px',
      'background-color': '#ff0000',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
    },
  },
};
