// Project data types and constants

export interface Project {
    id: string;
    name: string;
    category: string;
    description: string;
    client?: string;
    location?: string;
    status?: string;
    image?: string;
    // Mark assumed projects in comments
    isAssumed?: boolean;
}

export interface Category {
    id: string;
    name: string;
    image: string;
}

export const categories: Category[] = [
    {
        id: "corporate",
        name: "Corporate",
        image: "/projects/corporate-office.png"
    },
    {
        id: "industrial",
        name: "Industrial",
        image: "/projects/shopping-mall.png" // Reusing existing image
    },
    {
        id: "hospitality",
        name: "Hospitality",
        image: "/projects/luxury-hotel.png"
    },
    {
        id: "medical",
        name: "Medical",
        image: "/projects/medical-center.png"
    },
    {
        id: "governmental",
        name: "Governmental",
        image: "/projects/government-building.png"
    },
    {
        id: "landmark",
        name: "Landmark",
        image: "/projects/residential-tower.png" // Reusing existing image
    }
];

export const projects: Project[] = [
    // Corporate
    {
        id: "kafd",
        name: "KAFD",
        category: "corporate",
        description: "King Abdullah Financial District - Integrated building automation and energy management system",
        client: "KAFD Development",
        location: "Riyadh, Saudi Arabia",
        status: "Completed"
    },
    {
        id: "snapchat-office",
        name: "Snapchat Office",
        category: "corporate",
        description: "Modern office automation system with smart climate control and lighting",
        client: "Snapchat Inc.",
        location: "Riyadh, Saudi Arabia",
        status: "Completed"
    },
    {
        id: "dsv-company",
        name: "DSV Company",
        category: "corporate",
        description: "Corporate headquarters building automation and sustainability solutions",
        client: "DSV",
        location: "Saudi Arabia",
        status: "Completed"
    },
    {
        id: "elm-hq",
        name: "Elm HQ",
        category: "corporate",
        description: "Advanced building management system for technology company headquarters",
        client: "Elm Company",
        location: "Riyadh, Saudi Arabia",
        status: "In Progress",
        isAssumed: true // Assumed project
    },
    {
        id: "monshaat-innovation-center",
        name: "MONSHA'AT Innovation Center",
        category: "corporate",
        description: "Smart building automation for innovation and entrepreneurship center",
        client: "MONSHA'AT",
        location: "Riyadh, Saudi Arabia",
        status: "Planning",
        isAssumed: true // Assumed project
    },

    // Industrial
    {
        id: "amazon-warehouse",
        name: "Amazon Warehouse",
        category: "industrial",
        description: "Large-scale warehouse automation and energy management system",
        client: "Amazon",
        location: "Saudi Arabia",
        status: "Completed"
    },
    {
        id: "pif-data-center",
        name: "PIF Data Center",
        category: "industrial",
        description: "Critical infrastructure automation for data center facility",
        client: "Public Investment Fund",
        location: "Riyadh, Saudi Arabia",
        status: "In Progress",
        isAssumed: true // Assumed project
    },

    // Hospitality
    {
        id: "al-sarani-hotel",
        name: "Al SARANI Hotel",
        category: "hospitality",
        description: "Luxury hotel automation with guest room controls and energy optimization",
        client: "Al SARANI Hotels",
        location: "Saudi Arabia",
        status: "Completed"
    },
    {
        id: "holiday-inn",
        name: "Holiday Inn",
        category: "hospitality",
        description: "Hotel building automation and climate management system",
        client: "IHG Hotels",
        location: "Saudi Arabia",
        status: "Completed"
    },

    // Medical
    {
        id: "smc-hospital",
        name: "SMC Hospital",
        category: "medical",
        description: "Healthcare facility automation ensuring patient comfort and critical systems reliability",
        client: "Saudi Medical Center",
        location: "Saudi Arabia",
        status: "Completed"
    },

    // Governmental
    {
        id: "dar-al-eftaa-riyadh",
        name: "Dar Al Eftaa – Riyadh",
        category: "governmental",
        description: "Government facility building management and automation system",
        client: "General Presidency of Scholarly Research and Ifta",
        location: "Riyadh, Saudi Arabia",
        status: "Completed",
        isAssumed: true // Assumed project
    },

    // Landmark
    {
        id: "kingdom-tower",
        name: "Kingdom Tower",
        category: "landmark",
        description: "Iconic landmark building automation and smart systems integration",
        client: "Kingdom Holding Company",
        location: "Riyadh, Saudi Arabia",
        status: "Completed",
        isAssumed: true // Assumed project
    }
];

// Helper functions
export function getProjectsByCategory(categoryId: string): Project[] {
    return projects.filter(p => p.category === categoryId);
}

export function getProjectById(projectId: string): Project | undefined {
    return projects.find(p => p.id === projectId);
}

export function getCategoryById(categoryId: string): Category | undefined {
    return categories.find(c => c.id === categoryId);
}
