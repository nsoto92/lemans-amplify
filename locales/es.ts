export default {
    appBar: {
        pages: {
            services: { name: 'Servicios', href: '/services' }
        }
    },
    home: {
        title: "Le Mans Auto Detailing",
        subtitle: "Auto Detailing Profesional a Domicilio",
        description: "En Le Mans Auto Detailing llevamos el servicio de auto detailing hasta tu puerta. Atendemos todo tipo de vehículos con la más alta calidad, cuidado y dedicación, para que tu auto luzca como nuevo, sin que tengas que salir de casa.",
        button: "Conoce nuestros servicios",
        services: {
            title: "¿Porqué elegir a Le Mans Auto Detailing?",
            cards:{
                home: {
                    title: "Servicio Directo",
                    description: "Servicios directamente a tu ubicación.",
                },
                premium: {
                    title: "Alta Calidad",
                    description: "Productos de la más alta calidad y técnicas expertas."
                },
                flexible: {
                    title: "Flexibilidad",
                    description: "Horarios flexibles para su conveniencia."
                }
            }
        },
        map: {
            title: "Nuestra Área de Servicio",
            subtitle: "Llegamos donde tú estés.",
            description: `
                En Le Mans Auto Detailing ofrecemos nuestros servicios de detailing a domicilio alrededor del área metropolitana de Puerto Rico.
                Consulta el mapa para confirmar si tu ubicación está dentro de nuestra área de cobertura.
            `
        }
    },
    services: {
        title: "Nuestros Servicios",
        subtitle: "Detalle profesional para todo tipo de vehículos.",
        description: "En Le Mans Auto Detailing, ofrecemos una amplia gama de servicios diseñados para devolverle a tu auto su mejor apariencia, ¡Sin que tengas que salir de casa!",
        title2: "Servicios disponibles:",
        vehicleSizes: "Vehículo:",
        list: [
            {
                id: "1",
                name: "El Resuelve",
                price: 40,
                imageUrl: "/lemans.png",
                perks: [
                    "Lavado interio/exterior",
                    "Brillo de gomas",
                    "Flushing (Brillo de guardalodos)"
                ]
            },
            {
                id: "2",
                name: "El Detallado",
                price: 55,
                imageUrl: "/lemans.png",
                perks: [
                    "Lavado interio/exterior",
                    "Brillo de gomas",
                    "Flushing",
                    "Cera líquida"
                ]
            },
            {
                id: "3",
                name: "Brilloteo",
                price: 85,
                imageUrl: "/lemans.png",
                perks: [
                    "Lavado interior profundo",
                    "Lavado exterior",
                    "Brillo de gomas",
                    "Flushing",
                    "Hidratación de cueros",
                    "Hidratación de plásticos",
                    "Sellado de silica",
                    "Pino de Olor",
                    "Jabón hidrofóbico"
                ]
            },
            {
                id: "4",
                name: "Elite Clase A",
                price: 180,
                imageUrl: "/lemans.png",
                perks: [
                    "Lavado interior profundo",
                    "Lavado exterior",
                    "Brillo de gomas",
                    "Flushing",
                    "Aromatizante",
                    "Sellado de silica",
                    "Jabón hidrofóbico",
                    "Descontaminación química & manual",
                    "Lavado de motor",
                    "Remoción de brea",
                ]
            }
        ],
    },
};
