export const variants = {
    popUpAccount: {
        initial: {
            scale: 0.5,
            y: -80,
        },
        animate: {
            scale: 1,
            y: 0,
            transition: {
                duration: 0.1,
                type: "Tween",
                scale: {
                    type: "Tween",
                    ease: "easeIn",
                    duration: 0.1
                }
            }
        },
        exit: {
            scale: 0,
            opacity: 0,
            y: -80,
            transition: {
                duration: 0.1,
                type: "Tween",
            }
        }
    },
    popUpList: {
        initial: {
            scale: 0.5,
            y: -150,
            x: 40,
        },
        animate: {
            x: 0,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.2,
                type: "Tween",
                scale: {
                    type: "Tween",
                    ease: "easeIn",
                    duration: 0.2
                }
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.3,
                type: "Tween",
            }
        }
    },
    items: {
        hidden: {
            opacity: 0,
            scale: 1,
        },
        visible: (index) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: index * 0.1,
                type: "spring",
                damping: 18,
                stiffness: 100,
                duration: 0.2,
            }
        }),
        exit: {
            opacity: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                scale: {
                    type: "spring",
                    damping: 17,
                },
            }
        },
    },
    icon: {
        initial: {
            scale: 0,
        },
        animate: {
            scale: 1,
            transition: {
                duration: 0.3,
                type: "Tween",
                scale: {
                    type: "Tween",
                    ease: "easeIn",
                    duration: 0.2
                }
            }
        },
        exit: {
            scale: 0,
            transition: {
                duration: 0.3,
                type: "Tween",
            }
        }
    },
    modal: {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.5,
                type: "Tween",
                scale: {
                    type: "Tween",
                    ease: "easeIn",
                    duration: 0.2
                }
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.2,
                type: "Tween",
            }
        }
    },
    modalPublic: {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.2,
                type: "Tween",
                scale: {
                    type: "Tween",
                    ease: "easeIn",
                    duration: 0.2
                }
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.2,
                type: "Tween",
            }
        }
    },
    counter: {
        initial: {
            opacity: 0,
            scale: 0,
        },
        animate: {
            scale: [1, 1.5, 1],
            opacity: 1,
            transition: {
                duration: 0.2,
                type: "Tween",
                scale: {
                    type: "Tween",
                    ease: "easeIn",
                    duration: 0.2
                }
            }
        }
    },
}