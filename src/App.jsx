import React from 'react';
import Logo from './components/Logo';
import UserGrid from './components/UserGrid';

const mockUsers = [
    {
        avatar: 'https://randomuser.me/api/portraits/women/0.jpg',
        fullName: 'Aanya Sharma',
        jobTitle: 'Senior Frontend Developer',
        team: 'Phoenix',
        location: 'Bangalore, India',
        jiraTickets: [
            {id: 'WEB-1101', title: 'Implement new user dashboard UI'},
            {id: 'WEB-1105', title: 'Fix CSS bug on login page'},
            {id: 'WEB-1106', title: 'Add e2e tests for new feature'},
            {id: 'WEB-1107', title: 'Refactor user model'},
            {id: 'WEB-1108', title: 'Update dependencies'},
            {id: 'WEB-1109', title: 'Investigate performance issue'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/0.jpg',
        fullName: 'Jan Kowalski',
        jobTitle: 'Backend Engineer',
        team: 'Vanguard',
        location: 'Poland Kraków',
        jiraTickets: [
            {id: 'API-801', title: 'Optimize database query performance'},
            {id: 'API-815', title: 'Develop user profile endpoint'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
        fullName: 'Emily White',
        jobTitle: 'Frontend Engineer',
        team: 'Creative',
        location: 'London, UK',
        jiraTickets: [
            {id: 'DSGN-100', title: 'Redesign login page'},
            {id: 'DSGN-101', title: 'Conduct user research'},
            {id: 'DSGN-102', title: 'Implement new design system'},
            {id: 'DSGN-103', title: 'Create style guide'},
            {id: 'DSGN-104', title: 'Build UI components'},
            {id: 'DSGN-105', title: 'A/B test new homepage'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        fullName: 'Michael Green',
        jobTitle: 'DevOps Engineer',
        team: 'Infra',
        location: 'Berlin, Germany',
        jiraTickets: [
            {id: 'OPS-200', title: 'Automate deployment'},
            {id: 'OPS-201', title: 'Setup monitoring alerts'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        fullName: 'Sophia Brown',
        jobTitle: 'QA Engineer',
        team: 'Quality',
        location: 'Poland Kraków',
        jiraTickets: [
            {id: 'QA-300', title: 'Write new test cases'},
            {id: 'QA-301', title: 'Perform regression testing'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
        fullName: 'William Black',
        jobTitle: 'Machine Learning Engineer',
        team: 'Analytics',
        location: 'New York, USA',
        jiraTickets: [
            {id: 'DATA-400', title: 'Build predictive model'},
            {id: 'DATA-401', title: 'Analyze user behavior'},
            {id: 'DATA-402', title: 'Deploy new model to production'},
            {id: 'DATA-403', title: 'Optimize training pipeline'},
            {id: 'DATA-404', title: 'Research new algorithms'},
            {id: 'DATA-405', title: 'Create data visualization dashboard'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
        fullName: 'Olivia Red',
        jobTitle: 'Software Architect',
        team: 'Product',
        location: 'Poland Kraków',
        jiraTickets: [
            {id: 'PROD-500', title: 'Define Q3 roadmap'},
            {id: 'PROD-501', title: 'Gather user feedback'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
        fullName: 'James Blue',
        jobTitle: 'Mobile Developer',
        team: 'Mobile',
        location: 'Tokyo, Japan',
        jiraTickets: [
            {id: 'MOB-600', title: 'Implement push notifications'},
            {id: 'MOB-601', title: 'Fix iOS compatibility bug'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
        fullName: 'David Lee',
        jobTitle: 'Fullstack Developer',
        team: 'Innovate',
        location: 'Seoul, South Korea',
        jiraTickets: [
            {id: 'FS-700', title: 'Develop new API gateway'},
            {id: 'FS-701', title: 'Integrate payment module'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
        fullName: 'Sarah Chen',
        jobTitle: 'Security Engineer',
        team: 'Security',
        location: 'Singapore',
        jiraTickets: [
            {id: 'SEC-101', title: 'Implement OAuth 2.0'},
            {id: 'SEC-102', title: 'Security audit for API'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
        fullName: 'Marcus Johnson',
        jobTitle: 'Cloud Architect',
        team: 'Infrastructure',
        location: 'Austin, USA',
        jiraTickets: [
            {id: 'CLOUD-201', title: 'Migrate to Kubernetes'},
            {id: 'CLOUD-202', title: 'Setup multi-region deployment'},
            {id: 'CLOUD-203', title: 'Cost optimization review'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
        fullName: 'Anna Müller',
        jobTitle: 'Data Engineer',
        team: 'Data Platform',
        location: 'Munich, Germany',
        jiraTickets: [
            {id: 'DATA-501', title: 'Build ETL pipeline'},
            {id: 'DATA-502', title: 'Data warehouse optimization'}
        ]
    }
];

function App() {
    return (
        <>
            <Logo>WhoKnows</Logo>
            <UserGrid users={mockUsers} skeletonCount={12} />
        </>
    );
}

export default App;
