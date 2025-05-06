
        const app = Vue.createApp({
          data() {
            return {
              title: "Tile Projects",
              projects: [
                {
                  title: "Bathroom Remodel",
                  description:
                    "Transform your bathroom with a complete remodel, professionally installed tiles on floors, walls, and custom design elements to create a luxurious space",
                  images: [
                    "images/projects/br2.png",
                    "images/projects/br4.png",
                    "images/projects/br1.png",
                    "images/projects/br5.png",
                    "images/projects/br3.png",
                  ],
                  captions: [
                    "Bathroom Tile 1",
                    "Bathroom Tile 2",
                    "Bathroom Tile 3",
                    "Bathroom Tile 4",
                    "Bathroom Tile 5",
                  ],
                  currentIndex: 0,
                },
                {
                  title: "Shower Tiling",
                  description:
                    "Enhance your shower experience with expertly installed tiles that combine functionality and style, ensuring a waterproof and visually appealing finish",
                  images: [
                    "images/projects/s5.png",
                    "images/projects/s1.png",
                    "images/projects/s4.png",
                    "images/projects/s3.png",
                    "images/projects/s2.png",
                  ],
                  captions: [
                    "Shower Tile 1",
                    "Shower Tile 2",
                    "Shower Tile 3",
                    "Shower Tile 4",
                    "Shower Tile 5",
                  ],
                  currentIndex: 0,
                },
                {
                  title: "Kitchen Renovation",
                  description:
                    "Stunning kitchen transformations featuring expertly installed backsplashes crafted from ceramic, glass, or natural stone, complemented by elegant floor tiling",
                  images: [
                    "images/projects/k5.png",
                    "images/projects/k2.png",
                    "images/projects/k1.png",
                    "images/projects/k4.png",
                    "images/projects/k3.png",
                  ],
                  captions: [
                    "Kitchen Tile 1",
                    "Kitchen Tile 2",
                    "Kitchen Tile 3",
                    "Kitchen Tile 4",
                    "Kitchen Tile 5",
                  ],
                  currentIndex: 0,
                },
                {
                  title: "Floor Tiling",
                  description:
                    "Elegant and long-lasting floor tiling solutions designed to enhance the beauty and functionality of kitchens, bathrooms, entryways, and living areas",
                  images: [
                    "images/projects/f1.png",
                    "images/projects/f4.png",
                    "images/projects/f3.png",
                    "images/projects/f2.png",
                    "images/projects/f5.png",
                  ],
                  captions: [
                    "Floor Tile 1",
                    "Floor Tile 2",
                    "Floor Tile 3",
                    "Floor Tile 4",
                    "Floor Tile 5",
                  ],
                  currentIndex: 0,
                },
                {
                  title: "Custom Tile Design",
                  description:
                    "Unique custom patterns, intricate mosaics, and personalized tile designs tailored to reflect your individual style and vision",
                  images: [
                    "images/projects/p1.png",
                    "images/projects/p4.png",
                    "images/projects/p2.png",
                    "images/projects/p5.png",
                    "images/projects/p3.png",
                  ],
                  captions: [
                    "Pattern Tile 1",
                    "Pattern Tile 2",
                    "Pattern Tile 3",
                    "Pattern Tile 4",
                    "Pattern Tile 5",
                  ],
                  currentIndex: 0,
                },
                {
                  title: "All Tiling",
                  description:
                    "We handle all types of tiling jobs, from small repairs to large-scale installations, ensuring quality and satisfaction every step of the way",
                  images: [
                    "images/projects/o3.png",
                    "images/projects/o5.png",
                    "images/projects/o4.png",
                    "images/projects/o2.png",
                    "images/projects/o1.png",
                  ],
                  captions: [
                    "All Tile 1",
                    "All Tile 2",
                    "All Tile 3",
                    "All Tile 4",
                    "All Tile 5",
                  ],
                  currentIndex: 0,
                },
              ],
            };
          },
          methods: {
            nextSlide(projectIndex) {
              const project = this.projects[projectIndex];
              project.currentIndex =
                (project.currentIndex + 1) % project.images.length;
            },
            prevSlide(projectIndex) {
              const project = this.projects[projectIndex];
              project.currentIndex =
                (project.currentIndex - 1 + project.images.length) %
                project.images.length;
            },
            goToSlide(projectIndex, slideIndex) {
              this.projects[projectIndex].currentIndex = slideIndex;
            },
          },
        });
      
        app.mount("#vue_app");