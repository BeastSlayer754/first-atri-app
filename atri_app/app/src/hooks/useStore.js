import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Navbar": {
      "callbacks": {}
    },
    "Main_Div": {
      "callbacks": {}
    },
    "Home_Div": {
      "callbacks": {}
    },
    "Home_Div_Left": {
      "callbacks": {}
    },
    "Flex4": {
      "callbacks": {}
    },
    "Main_Div_2": {
      "callbacks": {}
    },
    "Second_Div": {
      "callbacks": {}
    },
    "Image_Div": {
      "callbacks": {}
    },
    "Div22": {
      "callbacks": {}
    },
    "SErvices": {
      "callbacks": {}
    },
    "Grid": {
      "callbacks": {}
    },
    "First_Div_Grid": {
      "callbacks": {}
    },
    "Secod_Div_Grid": {
      "callbacks": {}
    },
    "Third_DIv_Grid": {
      "callbacks": {}
    },
    "Proj": {
      "callbacks": {}
    },
    "Slider": {
      "callbacks": {}
    },
    "Main_Slider": {
      "callbacks": {}
    },
    "Div37": {
      "callbacks": {}
    },
    "Blog_D": {
      "callbacks": {}
    },
    "Blog_Flex": {
      "callbacks": {}
    },
    "Sub_Heading": {
      "callbacks": {}
    },
    "Sub_Heading_2": {
      "callbacks": {}
    },
    "Designer": {
      "callbacks": {}
    },
    "Product_Flex": {
      "callbacks": {}
    },
    "Half_1": {
      "callbacks": {}
    },
    "Half_2": {
      "callbacks": {}
    },
    "Image_Grid": {
      "callbacks": {}
    },
    "Image1": {
      "callbacks": {}
    },
    "Image2": {
      "callbacks": {}
    },
    "Image4": {
      "callbacks": {}
    },
    "Education": {
      "callbacks": {}
    },
    "Education_Flex": {
      "callbacks": {}
    },
    "Educ": {
      "callbacks": {}
    },
    "Learning": {
      "callbacks": {}
    },
    "Exp": {
      "callbacks": {}
    },
    "Exp_1": {
      "callbacks": {}
    },
    "Testimonial": {
      "callbacks": {}
    },
    "Test_1": {
      "callbacks": {}
    },
    "Test_2": {
      "callbacks": {}
    },
    "Div64": {
      "callbacks": {}
    },
    "Div65": {
      "callbacks": {}
    },
    "Footer": {
      "callbacks": {}
    },
    "Major_Flex_1": {
      "callbacks": {}
    },
    "Heading_F": {
      "callbacks": {}
    },
    "Grids": {
      "callbacks": {}
    },
    "Flex_Body": {
      "callbacks": {}
    },
    "Contact": {
      "callbacks": {}
    },
    "CFlex": {
      "callbacks": {}
    },
    "CFlex_1": {
      "callbacks": {}
    },
    "CFlex_2": {
      "callbacks": {}
    },
    "Add": {
      "callbacks": {}
    },
    "CGrid": {
      "callbacks": {}
    },
    "CFlex_3": {
      "callbacks": {}
    },
    "SC3": {
      "callbacks": {}
    },
    "Home_Logo": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Home.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Blog": {
      "custom": {
        "text": "Blog",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "About": {
      "custom": {
        "text": "About",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Call": {
      "custom": {
        "text": "Book a Call ->",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Project": {
      "custom": {
        "text": "Projects",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Services": {
      "custom": {
        "text": "Services",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Text_Box_1": {
      "custom": {
        "text": "I design products"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Text_Box_2": {
      "custom": {
        "text": "that delight and inspire people"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Para_Box": {
      "custom": {
        "text": "Hi! I’m Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Book": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "Contact",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Download_CV": {
      "custom": {
        "text": "Download CV ->",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Image8": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/face.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Center_Box": {
      "custom": {
        "text": "Trusted By"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image12": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image13": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image14": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/4.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image15": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/3.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Servicess": {
      "custom": {
        "text": "SERVICES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Home_Line": {
      "custom": {
        "text": "Design that solves problems,"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Home_Line_2": {
      "custom": {
        "text": "one product at a time"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image20": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/people.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Except": {
      "custom": {
        "text": "What you can expect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Para_1_Grid": {
      "custom": {
        "text": "I design products that are more than pretty. I make them shippable and usable."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "UnorderedList4": {
      "custom": {
        "type": "square",
        "titleColor": "#000000d9",
        "descriptionColor": "#00000073",
        "items": [
          {
            "title": "Sketch",
            "icon": ""
          },
          {
            "title": "Webflow",
            "description": "",
            "icon": ""
          },
          {
            "title": "Figma",
            "description": "",
            "icon": ""
          }
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image21": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Apps": {
      "custom": {
        "text": "Applications I'm fluent in"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Para_2_Grid": {
      "custom": {
        "text": "Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "UnorderedList3": {
      "custom": {
        "type": "square",
        "titleColor": "#000000d9",
        "descriptionColor": "#00000073",
        "items": [
          {
            "title": "Sketch",
            "icon": ""
          },
          {
            "title": "Webflow",
            "description": "",
            "icon": ""
          },
          {
            "title": "Figma",
            "description": "",
            "icon": ""
          }
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image22": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pac.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "What": {
      "custom": {
        "text": "What I can do for you"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Para_3_Div": {
      "custom": {
        "text": "Faster, better products that your users love. Here's all the services I provide:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "UnorderedList2": {
      "custom": {
        "type": "square",
        "titleColor": "#000000d9",
        "descriptionColor": "#00000073",
        "items": [
          {
            "title": "Design Strategy",
            "icon": ""
          },
          {
            "title": "Web and Mobile App Design",
            "description": "",
            "icon": ""
          },
          {
            "title": "Front-end Development",
            "description": "",
            "icon": ""
          }
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Project_H": {
      "custom": {
        "text": "PROJECT"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "First_Line": {
      "custom": {
        "text": "I bring results. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Second_Line": {
      "custom": {
        "text": "My clients are proof."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "View": {
      "custom": {
        "text": "View All Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image23": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Ok.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "BRAND": {
      "custom": {
        "text": "BRANDING"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Blog_Text": {
      "custom": {
        "text": "BLOGS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Sub": {
      "custom": {
        "text": "Latest Blogs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "View_All": {
      "custom": {
        "text": "View all",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "UnorderedList6": {
      "custom": {
        "type": "square",
        "titleColor": "#fff",
        "descriptionColor": "#fff",
        "items": [
          {
            "title": "Design tips for designers, that cover everything you need"
          },
          {
            "title": "How to build rapport with your web design clients",
            "description": "",
            "icon": ""
          },
          {
            "title": "Top 6 free website mockup tools 2021",
            "description": "",
            "icon": ""
          },
          {
            "title": "Logo design trends to avoid in 2021",
            "description": "",
            "icon": ""
          },
          {
            "title": "22 best UI design tools",
            "description": "",
            "icon": ""
          }
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Prod": {
      "custom": {
        "text": "PRODUCT DESIGNER"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Prod_2": {
      "custom": {
        "text": "That's Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Intro": {
      "custom": {
        "text": "Over the past 12 years, I've worked with a diverse range of clients, from startups to Fortune 500 companies. I love crafting interfaces that delight users and help businesses grow."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Full": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/full_1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Full_2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/full_2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Half_p": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/half_2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "UnorderedList7": {
      "custom": {
        "type": "square",
        "titleColor": "#000000d9",
        "descriptionColor": "#00000073",
        "items": [
          {
            "title": "Stanford University",
            "description": "MSc (Human Computer Interaction)"
          },
          {
            "title": "MIT Summer School",
            "description": "UX Training Bootcamp",
            "icon": ""
          },
          {
            "title": "California State University",
            "description": "BSc in Software Engineering",
            "icon": ""
          }
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Text_L": {
      "custom": {
        "text": "📚 Education"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "UnorderedList8": {
      "custom": {
        "type": "square",
        "titleColor": "#000000d9",
        "descriptionColor": "#00000073",
        "items": [
          {
            "title": "SpaceFleet",
            "description": "Senior Product Designer",
            "icon": "/app-assets/u8_1.svg"
          },
          {
            "title": "MusicMash",
            "description": "Information Architect",
            "icon": "/app-assets/u8_2.svg"
          },
          {
            "title": "Kingdom",
            "description": "UI Designer",
            "icon": "/app-assets/u8_3.svg"
          }
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Text_E": {
      "custom": {
        "text": "💼  Work Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Heading": {
      "custom": {
        "text": "TESTIMONIAL"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Subs": {
      "custom": {
        "text": "Word on the street"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Person": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/p1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Logo": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/start.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Start_Text": {
      "custom": {
        "text": "Jade helped us build a software so intuitive that it didn't need a walkthrough. He solved complex problems with brilliant design."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Author": {
      "custom": {
        "text": "John Frankin"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Position": {
      "custom": {
        "text": "Founder, Double Bunch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "FAQ": {
      "custom": {
        "text": "FAQ"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Desc": {
      "custom": {
        "text": "Frequently asked questions"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "UnorderedList9": {
      "custom": {
        "type": "circle",
        "titleColor": "#fff",
        "descriptionColor": "#fff",
        "items": [
          {
            "title": "What type of projects do you take on?",
            "description": "I usually work on B2C software, that's my forte--where I shine best. But I also have about 15 B2B software products in my portfolio. I do end-to-end product design + branding."
          },
          {
            "title": "What is your hourly rate?",
            "description": "I only charge hourly for my ongoing projects that need work on the regular. One-time projects are charged upfront to keep it transparent and clean! My hourly rate is $100.",
            "icon": ""
          },
          {
            "title": "What time-zone do you work in?",
            "description": "I work Pacific Standard Time, but I'm always ready to help out in emergencies, no matter the hour.",
            "icon": ""
          },
          {
            "title": "What is the typical timeline for a project?",
            "description": "Depends on the scope of the project, really. Some projects take less than a week. Some take months. The best way to find out is to get on a quick call with me, and discuss it. No strings attached!",
            "icon": ""
          }
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "UnorderedList10": {
      "custom": {
        "type": "square",
        "titleColor": "#fff",
        "descriptionColor": "#fff",
        "items": [
          {
            "title": "How do you charge for projects ?",
            "description": "I quote a price upfront--so that you know exactly what you're paying and for what, and there are no surprises later. The exact cost of your project depends on the scope and requirements!"
          },
          {
            "title": "What does your design process look like?",
            "description": "I take a problem-forward approach. Whether we're iterating on an existing product or building a new one from scratch, how to solve the user's problem in the simplest way possible is my first concern.  Send me an email to understand my process in depth!",
            "icon": ""
          },
          {
            "title": "What metrics do you use to measure success?",
            "description": "The best metrics are customer adoption, happiness, task success, and engagement. There are a number of frameworks such as the System Usability Scale that help us understand product performance and I'm happy to help with that.",
            "icon": ""
          },
          {
            "title": "What if I need help after the project is complete?",
            "description": "I always make sure to help out my clients one month after the project ends, for free. For any help post that, we can work out an ongoing arrangement!",
            "icon": ""
          }
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Head_C": {
      "custom": {
        "text": "Ready to make something kickass?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "SubH": {
      "custom": {
        "text": "Let's get on a call."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "HomeI": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/h.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "add": {
      "custom": {
        "text": "4353 Delaware Avenue, San Francisco, USA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Email": {
      "custom": {
        "text": "hi@thefolio.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "AL": {
      "custom": {
        "text": "About",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "SE": {
      "custom": {
        "text": "Services",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "EX": {
      "custom": {
        "text": "Experience",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "CO": {
      "custom": {
        "text": "Contact",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "DR": {
      "custom": {
        "text": "Dribbble",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TW": {
      "custom": {
        "text": "Twitter",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "IN": {
      "custom": {
        "text": "Instagram",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "BL": {
      "custom": {
        "text": "Blog",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "PR": {
      "custom": {
        "text": "Projects",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Cpy": {
      "custom": {
        "text": "© All rights reserved. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "Services": {}
}};

useStore.setState(desktopModeProps);

export default useStore;
