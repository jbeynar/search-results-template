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
            {id: 'WEB-1101', title: 'Implement comprehensive user dashboard UI with real-time notifications, activity feed, and customizable widget layout system'},
            {id: 'WEB-1105', title: 'Fix CSS bug'},
            {id: 'WEB-1106', title: 'Add e2e tests'},
            {id: 'WEB-1107', title: 'Refactor user model to support multi-tenant architecture with role-based access control and audit logging'},
            {id: 'WEB-1108', title: 'Update deps'},
            {id: 'WEB-1109', title: 'Investigate and resolve critical performance degradation in React component tree causing excessive re-renders'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/0.jpg',
        fullName: 'Jan Kowalski',
        jobTitle: 'Backend Engineer',
        team: 'Vanguard',
        location: 'Poland Kraków',
        jiraTickets: [
            {id: 'API-801', title: 'Optimize queries'},
            {id: 'API-815', title: 'User endpoint'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
        fullName: 'Emily White',
        jobTitle: 'Frontend Engineer',
        team: 'Creative',
        location: 'London, UK',
        jiraTickets: [
            {id: 'DSGN-100', title: 'Complete redesign of login page including social auth buttons, remember me functionality, and password strength indicator'},
            {id: 'DSGN-101', title: 'User research'},
            {id: 'DSGN-102', title: 'Design system'},
            {id: 'DSGN-103', title: 'Style guide'},
            {id: 'DSGN-104', title: 'Build reusable UI component library with Storybook documentation and visual regression testing'},
            {id: 'DSGN-105', title: 'A/B test'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        fullName: 'Michael Green',
        jobTitle: 'DevOps Engineer',
        team: 'Infra',
        location: 'Berlin, Germany',
        jiraTickets: [
            {id: 'OPS-200', title: 'Deploy'},
            {id: 'OPS-201', title: 'Alerts'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        fullName: 'Sophia Brown',
        jobTitle: 'QA Engineer',
        team: 'Quality',
        location: 'Poland Kraków',
        jiraTickets: [
            {id: 'QA-300', title: 'Write comprehensive end-to-end test suite covering all critical user journeys and edge cases'},
            {id: 'QA-301', title: 'Regression'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
        fullName: 'William Black',
        jobTitle: 'Machine Learning Engineer',
        team: 'Analytics',
        location: 'New York, USA',
        jiraTickets: [
            {id: 'DATA-400', title: 'Model'},
            {id: 'DATA-401', title: 'Analyze'},
            {id: 'DATA-402', title: 'Deploy ML model to production with A/B testing framework and automatic rollback capabilities'},
            {id: 'DATA-403', title: 'Pipeline'},
            {id: 'DATA-404', title: 'Research'},
            {id: 'DATA-405', title: 'Dashboard'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
        fullName: 'Olivia Red',
        jobTitle: 'Software Architect',
        team: 'Product',
        location: 'Poland Kraków',
        jiraTickets: [
            {id: 'PROD-500', title: 'Define comprehensive Q3 product roadmap including feature prioritization, resource allocation, and stakeholder alignment'},
            {id: 'PROD-501', title: 'Feedback'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
        fullName: 'James Blue',
        jobTitle: 'Mobile Developer',
        team: 'Mobile',
        location: 'Tokyo, Japan',
        jiraTickets: [
            {id: 'MOB-600', title: 'Push'},
            {id: 'MOB-601', title: 'iOS bug'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
        fullName: 'David Lee',
        jobTitle: 'Fullstack Developer',
        team: 'Innovate',
        location: 'Seoul, South Korea',
        jiraTickets: [
            {id: 'FS-700', title: 'Develop new microservices-based API gateway with rate limiting, caching, and request transformation capabilities'},
            {id: 'FS-701', title: 'Payments'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
        fullName: 'Sarah Chen',
        jobTitle: 'Security Engineer',
        team: 'Security',
        location: 'Singapore',
        jiraTickets: [
            {id: 'SEC-101', title: 'OAuth'},
            {id: 'SEC-102', title: 'Audit'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
        fullName: 'Marcus Johnson',
        jobTitle: 'Cloud Architect',
        team: 'Infrastructure',
        location: 'Austin, USA',
        jiraTickets: [
            {id: 'CLOUD-201', title: 'K8s'},
            {id: 'CLOUD-202', title: 'Implement multi-region deployment strategy with automatic failover and disaster recovery procedures'},
            {id: 'CLOUD-203', title: 'Costs'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
        fullName: 'Anna Müller',
        jobTitle: 'Data Engineer',
        team: 'Data Platform',
        location: 'Munich, Germany',
        jiraTickets: [
            {id: 'DATA-501', title: 'ETL'},
            {id: 'DATA-502', title: 'Optimize data warehouse schema and query performance for analytical workloads exceeding 10TB'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
        fullName: 'Carlos Rodriguez',
        jobTitle: 'Site Reliability Engineer',
        team: 'Platform',
        location: 'Madrid, Spain',
        jiraTickets: [
            {id: 'SRE-101', title: 'Uptime'},
            {id: 'SRE-102', title: 'Implement comprehensive observability stack including distributed tracing, metrics aggregation, and log correlation'},
            {id: 'SRE-103', title: 'Runbook'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
        fullName: 'Lisa Anderson',
        jobTitle: 'Technical Writer',
        team: 'Documentation',
        location: 'Toronto, Canada',
        jiraTickets: [
            {id: 'DOC-201', title: 'API docs'},
            {id: 'DOC-202', title: 'Create comprehensive developer onboarding guide covering local setup, architecture overview, and best practices'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
        fullName: 'Ahmed Hassan',
        jobTitle: 'Database Administrator',
        team: 'Data Ops',
        location: 'Dubai, UAE',
        jiraTickets: [
            {id: 'DBA-301', title: 'Backup'},
            {id: 'DBA-302', title: 'Index'},
            {id: 'DBA-303', title: 'Design and implement database sharding strategy for horizontal scaling to support 100M+ users'},
            {id: 'DBA-304', title: 'Monitor'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
        fullName: 'Maria Santos',
        jobTitle: 'UX Researcher',
        team: 'Design',
        location: 'São Paulo, Brazil',
        jiraTickets: [
            {id: 'UX-401', title: 'Survey'},
            {id: 'UX-402', title: 'Interviews'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
        fullName: 'Thomas Weber',
        jobTitle: 'Platform Engineer',
        team: 'Core Platform',
        location: 'Vienna, Austria',
        jiraTickets: [
            {id: 'PLAT-501', title: 'Build self-service developer platform with automated provisioning, CI/CD integration, and resource management'},
            {id: 'PLAT-502', title: 'CLI tool'},
            {id: 'PLAT-503', title: 'SDK'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
        fullName: 'Yuki Tanaka',
        jobTitle: 'iOS Developer',
        team: 'Mobile Apps',
        location: 'Osaka, Japan',
        jiraTickets: [
            {id: 'IOS-601', title: 'Swift'},
            {id: 'IOS-602', title: 'Widget'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
        fullName: 'Pierre Dubois',
        jobTitle: 'Solutions Architect',
        team: 'Enterprise',
        location: 'Paris, France',
        jiraTickets: [
            {id: 'ENT-701', title: 'Design enterprise integration architecture supporting legacy system migration and real-time data synchronization'},
            {id: 'ENT-702', title: 'SSO'},
            {id: 'ENT-703', title: 'Compliance'},
            {id: 'ENT-704', title: 'SLA'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/9.jpg',
        fullName: 'Nina Petrova',
        jobTitle: 'Test Automation Engineer',
        team: 'QA Automation',
        location: 'Moscow, Russia',
        jiraTickets: [
            {id: 'AUTO-801', title: 'Framework'},
            {id: 'AUTO-802', title: 'CI'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
        fullName: 'Kevin O\'Brien',
        jobTitle: 'Technical Lead',
        team: 'Core Services',
        location: 'Dublin, Ireland',
        jiraTickets: [
            {id: 'CORE-901', title: 'Lead architectural review and refactoring initiative to improve system modularity and reduce technical debt'},
            {id: 'CORE-902', title: 'Review'},
            {id: 'CORE-903', title: 'Mentor'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
        fullName: 'Isabella Romano',
        jobTitle: 'Product Designer',
        team: 'UX Design',
        location: 'Milan, Italy',
        jiraTickets: [
            {id: 'PD-1001', title: 'Wireframes'},
            {id: 'PD-1002', title: 'Prototype'},
            {id: 'PD-1003', title: 'Design comprehensive mobile-first responsive interface with accessibility compliance and dark mode support'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
        fullName: 'Raj Patel',
        jobTitle: 'Performance Engineer',
        team: 'Performance',
        location: 'Mumbai, India',
        jiraTickets: [
            {id: 'PERF-1101', title: 'Load test'},
            {id: 'PERF-1102', title: 'Conduct comprehensive performance analysis and optimization for critical API endpoints under high concurrency'}
        ]
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/11.jpg',
        fullName: 'Emma Wilson',
        jobTitle: 'Engineering Manager',
        team: 'Web Platform',
        location: 'Seattle, USA',
        jiraTickets: [
            {id: 'MGR-1201', title: 'Hiring'},
            {id: 'MGR-1202', title: '1:1s'},
            {id: 'MGR-1203', title: 'Planning'},
            {id: 'MGR-1204', title: 'Coordinate cross-functional initiative to modernize frontend architecture with micro-frontends and module federation'}
        ]
    }
];

function App() {
    return (
        <>
            <Logo>WhoKnows</Logo>
            <UserGrid users={mockUsers} />
        </>
    );
}

export default App;
