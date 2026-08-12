import { StrictMode, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/assets/logoandhero/bgremovelogo.png
var bgremovelogo_default = "/assets/bgremovelogo-CsfVsoW5.png";
//#endregion
//#region src/components/Navbar.jsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/Navbar.jsx");
function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return /* @__PURE__ */ jsx("nav", {
		className: "bg-white shadow-md",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container mx-auto px-4 py-2 flex justify-between items-center",
			children: [
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "flex items-center",
					children: /* @__PURE__ */ jsx("img", {
						src: bgremovelogo_default,
						alt: "Logo",
						className: "h-34 w-auto"
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "md:hidden cursor-pointer text-2xl",
					onClick: toggleMenu,
					children: /* @__PURE__ */ jsx("i", { className: isOpen ? "fas fa-times" : "fas fa-bars" })
				}),
				/* @__PURE__ */ jsxs("ul", {
					className: "hidden md:flex space-x-6 text-gray-800 font-semibold",
					children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/",
							className: "hover:text-blue-900 transition-colors",
							children: "Home"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/about",
							className: "hover:text-blue-900 transition-colors",
							children: "About Us"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/services",
							className: "hover:text-blue-900 transition-colors",
							children: "How We Work"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/projects",
							className: "hover:text-blue-900 transition-colors",
							children: "Projects"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/contact",
							className: "hover:text-blue-900 transition-colors",
							children: "Contact"
						}) })
					]
				}),
				isOpen && /* @__PURE__ */ jsxs("ul", {
					className: "absolute top-16 left-0 w-full bg-white flex flex-col items-center space-y-4 py-6 shadow-lg md:hidden z-50",
					children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/",
							className: "hover:text-blue-900 transition-colors",
							onClick: toggleMenu,
							children: "Home"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/about",
							className: "hover:text-blue-900 transition-colors",
							onClick: toggleMenu,
							children: "About Us"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/services",
							className: "hover:text-blue-900 transition-colors",
							onClick: toggleMenu,
							children: "How We Work"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/projects",
							className: "hover:text-blue-900 transition-colors",
							onClick: toggleMenu,
							children: "Projects"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/contact",
							className: "hover:text-blue-900 transition-colors",
							onClick: toggleMenu,
							children: "Contact"
						}) })
					]
				})
			]
		})
	});
}
//#endregion
//#region src/assets/logoandhero/mainhero.png
var mainhero_default = "/assets/mainhero-Dhuktx2_.png";
//#endregion
//#region src/components/Hero.jsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/Hero.jsx");
function Hero() {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative h-screen bg-cover bg-center flex items-center",
		style: { backgroundImage: `url(${mainhero_default})` },
		children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/30" }), /* @__PURE__ */ jsxs("div", {
			className: "container mx-auto px-6 relative z-10 text-white",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "max-w-3xl border-l-4 border-white pl-8",
				children: [/* @__PURE__ */ jsxs("h1", {
					className: "text-5xl md:text-7xl font-bold leading-tight mb-4",
					children: [
						"Premium Stone ",
						/* @__PURE__ */ jsx("br", {}),
						" Supply & Installation"
					]
				}), /* @__PURE__ */ jsx("p", {
					className: "text-xl md:text-2xl font-light",
					children: "For Luxury Villas, Residential & Commercial Projects in the UAE"
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "absolute bottom-10 right-10 flex space-x-4",
				children: [/* @__PURE__ */ jsx("div", {
					className: "w-12 h-12 border-2 border-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-all",
					children: /* @__PURE__ */ jsx("span", {
						className: "text-xl",
						children: "←"
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "w-12 h-12 border-2 border-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-all",
					children: /* @__PURE__ */ jsx("span", {
						className: "text-xl",
						children: "→"
					})
				})]
			})]
		})]
	});
}
//#endregion
//#region src/assets/projectimages/projectImage1.jpg
var projectImage1_default = "/assets/projectImage1-Z8e7SJn_.jpg";
//#endregion
//#region src/assets/projectimages/projectImage2.jpg
var projectImage2_default = "/assets/projectImage2-D_SESstF.jpg";
//#endregion
//#region src/assets/projectimages/projectImage3.jpg
var projectImage3_default = "/assets/projectImage3-aKQgnSNQ.jpg";
//#endregion
//#region src/Pages/Home.jsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/Pages/Home.jsx");
function Home() {
	return /* @__PURE__ */ jsxs("div", {
		className: "home-page",
		children: [/* @__PURE__ */ jsx(Hero, {}), /* @__PURE__ */ jsx("section", {
			className: "py-20 bg-white",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container mx-auto px-4 md:px-8",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "mb-12",
						children: /* @__PURE__ */ jsxs("h2", {
							className: "text-4xl font-bold text-[#0A2647] inline-block pb-2 relative",
							children: ["Our Work", /* @__PURE__ */ jsx("span", { className: "absolute bottom-0 left-0 w-12 h-[3px] bg-[#0A2647]" })]
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-12",
						children: [
							{
								id: 1,
								image: projectImage1_default,
								title: "Luxury Villa Stone Cladding",
								location: "Dubai, UAE"
							},
							{
								id: 2,
								image: projectImage2_default,
								title: "Commercial Facade Installation",
								location: "Abu Dhabi, UAE"
							},
							{
								id: 3,
								image: projectImage3_default,
								title: "Premium Marble Flooring",
								location: "Sharjah, UAE"
							}
						].map((project) => /* @__PURE__ */ jsxs("div", {
							className: "relative overflow-hidden rounded-3xl aspect-[4/3] shadow-md group cursor-pointer",
							children: [/* @__PURE__ */ jsx("img", {
								src: project.image,
								alt: project.title,
								className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
							}), /* @__PURE__ */ jsxs("div", {
								className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "font-bold text-lg",
									children: project.title
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm text-gray-200",
									children: project.location
								})]
							})]
						}, project.id))
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex justify-center",
						children: /* @__PURE__ */ jsx(Link, {
							to: "/projects",
							className: "px-8 py-3 border-2 border-[#0A2647] text-[#0A2647] rounded-xl font-semibold hover:bg-[#0A2647] hover:text-white transition-all duration-300",
							children: "Explore All"
						})
					})
				]
			})
		})]
	});
}
//#endregion
//#region src/Pages/About.jsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/Pages/About.jsx");
function About() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-16 bg-white",
		children: /* @__PURE__ */ jsx("div", {
			className: "container mx-auto px-4 md:px-8",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col md:flex-row items-center justify-between gap-12",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "w-full md:w-1/2",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-4xl md:text-5xl font-bold text-[#0A2647] mb-6",
							children: "Who We Are"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-gray-600 text-lg mb-6 leading-relaxed",
							children: "Prime Rock General Contracting L.L.C has been serving the UAE construction industry for over 10 years, specializing in the supply, manufacturing and installation of premium natural and artificial stone."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-gray-600 text-lg mb-10 leading-relaxed",
							children: "Our Experienced team delivers high-quality solutions for both residential and commercial projects."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap gap-12",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
								className: "text-4xl md:text-5xl font-bold text-[#0A2647] block",
								children: "10+"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-gray-400 text-xl md:text-2xl font-semibold uppercase tracking-wider",
								children: "Years Experience"
							})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
								className: "text-4xl md:text-5xl font-bold text-[#0A2647] block",
								children: "50+"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-gray-400 text-xl md:text-2xl font-semibold uppercase tracking-wider",
								children: "Projects Completed"
							})] })]
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "w-full md:w-1/2 flex justify-center md:justify-end",
					children: /* @__PURE__ */ jsx("div", {
						className: "relative p-3 border-4 border-[#3ABEF9] rounded-sm",
						children: /* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-2 gap-2 w-full max-w-[450px]",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "aspect-square bg-gray-200 overflow-hidden",
									children: /* @__PURE__ */ jsx("img", {
										src: "https://via.placeholder.com/220",
										alt: "Work 1",
										className: "w-full h-full object-cover"
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "aspect-square bg-gray-200 overflow-hidden",
									children: /* @__PURE__ */ jsx("img", {
										src: "https://via.placeholder.com/220",
										alt: "Work 2",
										className: "w-full h-full object-cover"
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "aspect-square bg-gray-200 overflow-hidden",
									children: /* @__PURE__ */ jsx("img", {
										src: "https://via.placeholder.com/220",
										alt: "Work 3",
										className: "w-full h-full object-cover"
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "aspect-square bg-gray-200 overflow-hidden",
									children: /* @__PURE__ */ jsx("img", {
										src: "https://via.placeholder.com/220",
										alt: "Work 4",
										className: "w-full h-full object-cover"
									})
								})
							]
						})
					})
				})]
			})
		})
	});
}
//#endregion
//#region src/assets/servicesimages/supply.jpg
var supply_default = "/assets/supply-CL-GqU_W.jpg";
//#endregion
//#region src/assets/servicesimages/installation.jpg
var installation_default = "/assets/installation-D5Tp1Acu.jpg";
//#endregion
//#region src/assets/servicesimages/consultancy.jpeg
var consultancy_default = "/assets/consultancy-DksVQz9M.jpeg";
//#endregion
//#region src/Pages/Services.jsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/Pages/Services.jsx");
function Services() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-20 bg-gray-50",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container mx-auto px-4 md:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center mb-16",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-4xl md:text-5xl font-bold text-[#0A2647] mb-4",
						children: "Our Services"
					}),
					/* @__PURE__ */ jsx("div", { className: "w-24 h-1 bg-[#3ABEF9] mx-auto" }),
					/* @__PURE__ */ jsx("p", {
						className: "text-gray-600 mt-6 max-w-2xl mx-auto text-lg",
						children: "Delivering excellence in every aspect of stone supply, installation, and architectural consultancy."
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-10",
				children: [
					{
						title: "Supply",
						description: "We provide premium natural and artificial stones sourced from the best quarries worldwide, ensuring quality and variety for every project.",
						image: supply_default
					},
					{
						title: "Installation",
						description: "Our skilled craftsmen ensure precise and flawless installation of stone surfaces, from luxury villas to large-scale commercial developments.",
						image: installation_default
					},
					{
						title: "Consultancy",
						description: "We offer expert guidance on stone selection, design, and technical specifications to help you make informed decisions for your architectural needs.",
						image: consultancy_default
					}
				].map((service, index) => /* @__PURE__ */ jsxs("div", {
					className: "bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300",
					children: [/* @__PURE__ */ jsx("div", {
						className: "h-64 overflow-hidden",
						children: /* @__PURE__ */ jsx("img", {
							src: service.image,
							alt: service.title,
							className: "w-full h-full object-cover hover:scale-110 transition-transform duration-500"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "p-8",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-2xl font-bold text-[#0A2647] mb-4",
							children: service.title
						}), /* @__PURE__ */ jsx("p", {
							className: "text-gray-600 leading-relaxed",
							children: service.description
						})]
					})]
				}, index))
			})]
		})
	});
}
//#endregion
//#region src/assets/projectimages/projectImage4.jpg
var projectImage4_default = "/assets/projectImage4-B6I3ky8t.jpg";
//#endregion
//#region src/assets/projectimages/projectImage5.jpg
var projectImage5_default = "/assets/projectImage5-BKD9TGQ3.jpg";
//#endregion
//#region src/assets/projectimages/projectImage6.jpg
var projectImage6_default = "/assets/projectImage6-CC-JgHdX.jpg";
//#endregion
//#region src/assets/projectimages/projectimage7.jpg
var projectimage7_default = "/assets/projectimage7-Cr8dANIV.jpg";
//#endregion
//#region src/Pages/Projects.jsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/Pages/Projects.jsx");
function Projects() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoplay, setIsAutoplay] = useState(true);
	const autoplayRef = useRef(null);
	const projects = [
		{
			id: 1,
			image: projectImage1_default,
			title: "Luxury Villa Stone Cladding",
			location: "Palm Jumeirah, Dubai",
			category: "Residential",
			description: "Premium natural stone cladding designed for a modern waterfront villa, providing high durability and elegant thermal insulation."
		},
		{
			id: 2,
			image: projectImage2_default,
			title: "Grand Entrance Portal",
			location: "Emirates Hills, Dubai",
			category: "Residential",
			description: "A colossal bespoke stone entryway that creates a majestic, luxury statement. Meticulously engineered and installed."
		},
		{
			id: 3,
			image: projectImage3_default,
			title: "Palace Exterior Facade",
			location: "Al Bateen, Abu Dhabi",
			category: "Commercial / Palace",
			description: "High-grade limestone cladding for a luxury estate exterior, showcasing exquisite classical details and structural grandeur."
		},
		{
			id: 4,
			image: projectImage4_default,
			title: "Contemporary Architectural Pillars",
			location: "Jumeirah, Dubai",
			category: "Residential",
			description: "Minimalist natural stone columns and cladding designed to blend seamlessly with modern steel and glass elements."
		},
		{
			id: 5,
			image: projectImage5_default,
			title: "Premium Travertine Wall Panels",
			location: "Saadiyat Island, Abu Dhabi",
			category: "Commercial",
			description: "Sophisticated beige travertine installation offering a textured, timeless aesthetic for high-end boutique properties."
		},
		{
			id: 6,
			image: projectImage6_default,
			title: "Elite Residence Outer Boundary",
			location: "Mirdif, Dubai",
			category: "Residential",
			description: "Heavy-duty custom stone wall and entrance pillars built to withstand extreme environmental conditions while remaining visually striking."
		},
		{
			id: 7,
			image: projectimage7_default,
			title: "Modern Villa Architectural Detailing",
			location: "Al Ain, UAE",
			category: "Residential",
			description: "Elegant exterior finish combining dry-install stone cladding and decorative moldings to elevate structural sophistication."
		}
	];
	const prevSlide = () => {
		setCurrentIndex((prev) => prev === 0 ? projects.length - 1 : prev - 1);
	};
	const nextSlide = () => {
		setCurrentIndex((prev) => prev === projects.length - 1 ? 0 : prev + 1);
	};
	const goToSlide = (index) => {
		setCurrentIndex(index);
	};
	useEffect(() => {
		if (isAutoplay) autoplayRef.current = setInterval(() => {
			nextSlide();
		}, 5e3);
		return () => {
			if (autoplayRef.current) clearInterval(autoplayRef.current);
		};
	}, [isAutoplay, currentIndex]);
	return /* @__PURE__ */ jsxs("div", {
		className: "projects-page bg-gray-50 min-h-screen",
		children: [
			/* @__PURE__ */ jsx("section", {
				className: "py-16 bg-[#0A2647] text-white",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container mx-auto px-4 md:px-8 text-center",
					children: [
						/* @__PURE__ */ jsx("h1", {
							className: "text-4xl md:text-5xl font-bold mb-4",
							children: "Our Projects"
						}),
						/* @__PURE__ */ jsx("div", { className: "w-24 h-1 bg-[#3ABEF9] mx-auto mb-6" }),
						/* @__PURE__ */ jsx("p", {
							className: "text-gray-300 max-w-2xl mx-auto text-lg md:text-xl",
							children: "Explore our curated portfolio of premium stone supply and flawless installation works across high-end villas and commercial spaces in the UAE."
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "py-16 container mx-auto px-4 md:px-8",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "text-center mb-10",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-sm font-semibold tracking-wider text-[#3ABEF9] uppercase",
						children: "Featured Work"
					}), /* @__PURE__ */ jsx("h2", {
						className: "text-3xl font-bold text-[#0A2647] mt-1",
						children: "Interactive Project Showcase"
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto md:h-[500px]",
					onMouseEnter: () => setIsAutoplay(false),
					onMouseLeave: () => setIsAutoplay(true),
					children: [/* @__PURE__ */ jsx("div", {
						className: "w-full md:w-3/5 h-64 md:h-full relative overflow-hidden bg-gray-200",
						children: projects.map((project, index) => /* @__PURE__ */ jsxs("div", {
							className: `absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`,
							children: [/* @__PURE__ */ jsx("img", {
								src: project.image,
								alt: project.title,
								className: "w-full h-full object-cover"
							}), /* @__PURE__ */ jsx("span", {
								className: "absolute top-6 left-6 bg-[#3ABEF9] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md z-20",
								children: project.category
							})]
						}, project.id))
					}), /* @__PURE__ */ jsxs("div", {
						className: "w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-between bg-white relative z-20",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-[#3ABEF9] font-medium text-sm block mb-2",
								children: projects[currentIndex].location
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "text-2xl md:text-3xl font-bold text-[#0A2647] mb-4 leading-snug transition-all",
								children: projects[currentIndex].title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-gray-600 leading-relaxed text-sm md:text-base",
								children: projects[currentIndex].description
							})
						] }), /* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t pt-6 border-gray-100",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex space-x-3",
								children: [/* @__PURE__ */ jsx("button", {
									onClick: prevSlide,
									className: "w-10 h-10 border-2 border-[#0A2647] text-[#0A2647] hover:bg-[#0A2647] hover:text-white transition-all rounded-full flex items-center justify-center font-bold",
									"aria-label": "Previous Slide",
									children: "←"
								}), /* @__PURE__ */ jsx("button", {
									onClick: nextSlide,
									className: "w-10 h-10 border-2 border-[#0A2647] text-[#0A2647] hover:bg-[#0A2647] hover:text-white transition-all rounded-full flex items-center justify-center font-bold",
									"aria-label": "Next Slide",
									children: "→"
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "flex space-x-1.5",
								children: projects.map((_, index) => /* @__PURE__ */ jsx("button", {
									onClick: () => goToSlide(index),
									className: `h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? "w-6 bg-[#3ABEF9]" : "w-2.5 bg-gray-300 hover:bg-gray-400"}`,
									"aria-label": `Go to slide ${index + 1}`
								}, index))
							})]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-16 bg-white",
				children: /* @__PURE__ */ jsxs("div", {
					className: "container mx-auto px-4 md:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "text-center mb-12",
						children: [
							/* @__PURE__ */ jsx("h2", {
								className: "text-3xl font-bold text-[#0A2647]",
								children: "Complete Project Gallery"
							}),
							/* @__PURE__ */ jsx("div", { className: "w-16 h-1 bg-[#3ABEF9] mx-auto mt-3 mb-4" }),
							/* @__PURE__ */ jsx("p", {
								className: "text-gray-500 max-w-xl mx-auto",
								children: "View all of our high-quality natural stone projects detailing premium aesthetics and robust installations."
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
						children: projects.map((project, index) => /* @__PURE__ */ jsxs("div", {
							className: "bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group",
							onClick: () => goToSlide(index),
							children: [/* @__PURE__ */ jsxs("div", {
								className: "h-64 overflow-hidden relative",
								children: [/* @__PURE__ */ jsx("img", {
									src: project.image,
									alt: project.title,
									className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								}), /* @__PURE__ */ jsx("span", {
									className: "absolute top-4 right-4 bg-white/95 text-[#0A2647] text-xs font-bold px-2.5 py-1 rounded-full shadow",
									children: project.category
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "p-6",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "text-xs text-[#3ABEF9] font-medium block uppercase tracking-wider mb-1",
										children: project.location
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "text-xl font-bold text-[#0A2647] mb-2 group-hover:text-[#3ABEF9] transition-colors",
										children: project.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-gray-500 text-sm line-clamp-2",
										children: project.description
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-4 flex items-center text-xs font-semibold text-[#0A2647] group-hover:underline",
										children: ["View in Showcase ", /* @__PURE__ */ jsx("span", {
											className: "ml-1",
											children: "→"
										})]
									})
								]
							})]
						}, project.id))
					})]
				})
			})
		]
	});
}
//#endregion
//#region src/Pages/OurClients.jsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/Pages/OurClients.jsx");
function OurClients() {
	return /* @__PURE__ */ jsxs("div", {
		className: "our-clients-page",
		children: [/* @__PURE__ */ jsx("h1", { children: "Our Clients" }), /* @__PURE__ */ jsx("p", { children: "We are proud to work with a diverse range of clients." })]
	});
}
//#endregion
//#region src/Pages/Contact.jsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/Pages/Contact.jsx");
function Contact() {
	return /* @__PURE__ */ jsxs("div", {
		className: "Contact-page",
		children: [/* @__PURE__ */ jsx("h1", { children: "Contact Us" }), /* @__PURE__ */ jsx("p", { children: "We would love to hear from you!" })]
	});
}
//#endregion
//#region src/components/Footer.jsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/Footer.jsx");
function Footer() {
	return /* @__PURE__ */ jsx("footer", { children: /* @__PURE__ */ jsx("p", { children: "© 2023 My Company. All rights reserved." }) });
}
//#endregion
//#region src/App.jsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/App.jsx");
function App() {
	return /* @__PURE__ */ jsxs(BrowserRouter, { children: [
		/* @__PURE__ */ jsx(Navbar, {}),
		/* @__PURE__ */ jsxs(Routes, { children: [
			/* @__PURE__ */ jsx(Route, {
				path: "/",
				element: /* @__PURE__ */ jsx(Home, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/about",
				element: /* @__PURE__ */ jsx(About, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/services",
				element: /* @__PURE__ */ jsx(Services, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/projects",
				element: /* @__PURE__ */ jsx(Projects, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/ourclients",
				element: /* @__PURE__ */ jsx(OurClients, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/contact",
				element: /* @__PURE__ */ jsx(Contact, {})
			})
		] }),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
//#endregion
//#region src/main.jsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/main.jsx");
createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(App, {}) }));
//#endregion
export {};
