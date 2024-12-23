import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: '/Admin/dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routeLink: '/Admin/CreeCV',
        icon: 'fal fa-file',
        label: 'Expérience',
        role: ['ROLE_Admin', 'ROLE_Employe'], // Accessible par ces rôles
        items: [
            {
                routeLink: 'CreeEX/cree',
                label: 'Cree Expérience',
                role: ['ROLE_Admin', 'ROLE_Employe']
            },
            {
                routeLink: 'CreeEX/liste',
                label: 'Liste Expérience',
                role: ['ROLE_Admin', 'ROLE_Employe']
            }
        ]
    },
    {
        routeLink: '/Admin/GestionEmp',
        icon: 'fal fa-users',
        label: ' Gestions Users',
        role: ['ROLE_Admin'],
        items: [
            {
                routeLink: 'GestionEmp/creeEmp',
                label: 'Cree Employer',
                role: ['ROLE_Admin']
            },
            {
                routeLink: 'GestionEmp/listeEmp',
                label: 'Liste Employers',
                role: ['ROLE_Admin']
            }
        ]
    },
    {
        routeLink: '/Admin/GestionProjet',
        icon: 'fad fa-tasks-alt',
        label: ' Gestions Projets',
        role: ['ROLE_Admin', 'ROLE_Manager'],
        items: [
            {
                routeLink: 'GestionProjet/creeProjet',
                label: 'Cree projet',
                role: ['ROLE_Admin', 'ROLE_Manager']
            },
            {
                routeLink: 'GestionProjet/listeProjet',
                label: 'Liste projets',
                role: ['ROLE_Admin', 'ROLE_Manager'],
            }
        ]
    },
    {
        routeLink: '/Admin/AffecterEmp',
        icon: 'fal fa-project-diagram',
        label: 'Affectations',
        role: ['ROLE_Admin', 'ROLE_Manager']
    },


    // {
    //     routeLink: 'products',
    //     icon: 'fal fa-box-open',
    //     label: 'Products',
    //     items: [
    //         {
    //             routeLink: 'products/level1.1',
    //             label: 'Level 1.1',
    //             items: [
    //                 {
    //                     routeLink: 'products/level2.1',
    //                     label: 'Level 2.1',
    //                 },
    //                 {
    //                     routeLink: 'products/level2.2',
    //                     label: 'Level 2.2',
    //                     items: [
    //                         {
    //                             routeLink: 'products/level3.1',
    //                             label: 'Level 3.1'
    //                         },
    //                         {
    //                             routeLink: 'products/level3.2',
    //                             label: 'Level 3.2'
    //                         }
    //                     ]
    //                 }
    //             ]
    //         },
    //         {
    //             routeLink: 'products/level1.2',
    //             label: 'Level 1.2',
    //         }
    //     ]
    // },
    // {
    //     routeLink: 'coupens',
    //     icon: 'fal fa-tags',
    //     label: 'Coupens',
    //     items: [
    //         {
    //             routeLink: 'coupens/list',
    //             label: 'List Coupens'
    //         },
    //         {
    //             routeLink: 'coupens/create',
    //             label: 'Create Coupens'
    //         }
    //     ]
    // },
    // {
    //     routeLink: 'pages',
    //     icon: 'fal fa-file',
    //     label: 'Pages'
    // },

];


