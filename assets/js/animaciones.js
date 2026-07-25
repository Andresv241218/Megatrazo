/*=========================================
        ABOUT
=========================================*/

const about = document.querySelector(".about");

if (about) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                about.classList.add("show");

            }

        });

    }, {

        threshold: 0.25

    });

    observer.observe(about);

}

/*=========================================
        SERVICES
=========================================*/

const services = document.querySelector(".services");

if (services) {

    const observerServices = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                services.classList.add("show");

            }

        });

    }, {

        threshold: 0.25

    });

    observerServices.observe(services);

}

/*=========================================
        WHY US
=========================================*/

const whyUs = document.querySelector(".why-us");

if (whyUs) {

    const observerWhy = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                whyUs.classList.add("show");

            }

        });

    },{

        threshold:0.25

    });

    observerWhy.observe(whyUs);

}

/*=========================================
            PROCESS
=========================================*/

const process = document.querySelector(".process");

if(process){

    const observerProcess = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                process.classList.add("show");

            }

        });

    },{

        threshold:.25

    });

    observerProcess.observe(process);

}

/*=========================================
            CLIENTS
=========================================*/

const clients = document.querySelector(".clients");

if(clients){

    const observerClients = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                clients.classList.add("show");

            }

        });

    },{

        threshold:.25

    });

    observerClients.observe(clients);

}

/*=========================================
                CTA
=========================================*/

const cta = document.querySelector(".cta");

if(cta){

    const observerCTA = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                cta.classList.add("show");

            }

        });

    },{

        threshold:.25

    });

    observerCTA.observe(cta);

}

/*=========================================
                FOOTER
=========================================*/

const footer = document.querySelector(".footer");

const subFooter = document.querySelector(".sub-footer");

if(footer){

    const observerFooter = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                footer.classList.add("show");

                subFooter.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    observerFooter.observe(footer);

}

/*=========================================
            NOSOTROS
=========================================*/
/*=========================================
            HERO INTERNO
=========================================*/

const heroElements = document.querySelectorAll(
    ".page-subtitle, .page-hero-content h1, .page-hero-content p, .breadcrumb-custom"
);

heroElements.forEach((element,index)=>{

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                setTimeout(()=>{

                    entry.target.classList.add("show");

                },index*150);

            }

        });

    },{

        threshold:.2

    });

    observer.observe(element);

});

/*=========================================
            ¿QUIÉNES SOMOS?
=========================================*/

document.querySelectorAll(".who-content, .who-image").forEach(element=>{

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.2

    });

    observer.observe(element);

});

/*=========================================
            NUESTRA HISTORIA
=========================================*/

document.querySelectorAll(".history-item").forEach((item)=>{

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.2

    });

    observer.observe(item);

});

/*=========================================
            NUESTRA ESENCIA
=========================================*/

document.querySelectorAll(".essence-card").forEach(card=>{

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.2

    });

    observer.observe(card);

});

/*=========================================
            NUESTROS VALORES
=========================================*/

document.querySelectorAll(".value-card").forEach(card=>{

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.2

    });

    observer.observe(card);

});

/*=========================================
        ¿POR QUÉ ELEGIR MEGATRAZO?
=========================================*/

document.querySelectorAll(".why-card").forEach(card=>{

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.2

    });

    observer.observe(card);

});

/*=========================================
        NUESTRO COMPROMISO
=========================================*/

document.querySelectorAll(".commitment-content, .commitment-image").forEach(element=>{

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.2

    });

    observer.observe(element);

});




const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

hiddenElements.forEach(element=>{

    observer.observe(element);

});