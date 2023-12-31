export const defaultResume = {
    personal: {
        name: 'John Apple',
        email: 'johnapple@email.com',
        phone: '',
        location: 'Santa Rosa, CA',
        summary: ''
    },
    work: [
        {
            company: 'Pear',
            title: 'Developer',
            date: '2018-2022',
            bullet1: 'In ut nisi condimentum, facilisis velit eu, luctus lorem',
            bullet2: 'Proin fermentum leo iaculis, ultrices ante nec, hendrerit mauris',
            bullet3: '',
            empty: false
        },
        {
            company: '',
            title: '',
            date: '',
            bullet1: '',
            bullet2: '',
            bullet3: '',
            empty: true
        },
        {
            company: '',
            title: '',
            date: '',
            bullet1: '',
            bullet2: '',
            bullet3: '',
            empty: true
        }
    ],
    education: {
        school: 'University of Alaska',
        date: '2013-2017',
        degree: 'BS, Computer Science',
        location: 'Anchorage, AK',
        bullet1: 'Mauris sit amet neque imperdiet, cursus nisl id, blandit risus',
        bullet2: '',
        bullet3: ''
    },
    other: {
        skills: 'Quisque sodales, nibh et, elementum volutpat',
        interests: 'Lorem, ipsum dolor, sit amet'
    }
};