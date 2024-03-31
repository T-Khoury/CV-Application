export const defaultResume = {
    personal: {
        name: 'John Apple',
        email: 'johnapple@email.com',
        phone: '(123) 456-7890',
        location: 'Santa Rosa, CA',
        summary: ''
    },
    work: {
        jobs: [
            {
                company: 'Appellon',
                title: 'Senior React Developer',
                date: '2022 - ',
                location: 'San Francisco, CA',
                bullet1: 'Morbi scelerisque nisl sed lectus elementum, iaculis egestas ipsum ultricies. Aenean leo sapien, scelerisque sagittis vehicula at, congue eu erat.',
                bullet2: 'Duis vulputate nibh nec dignissim ultrices. Nullam convallis luctus laoreet. Nulla enim urna, facilisis in tincidunt sed, laoreet eu ante.',
                bullet3: 'Did X which increased Y by Z%, increasing customer satisfaction by a factor of A, and had a direct impact of B% on C'
            },
            {
                company: 'Pear',
                title: 'Full-Stack Developer',
                date: '2018-2022',
                location: 'Raleigh, NC',
                bullet1: 'Pellentesque interdum nisi eget nulla tempus sagittis. Proin et dignissim ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris non maximus velit, sed molestie arcu.',
                bullet2: 'Proin fermentum leo iaculis, ultrices ante nec, hendrerit mauris',
                bullet3: 'In ut nisi condimentum, facilisis velit eu, luctus lorem',
                empty: false
            },
            {
                company: '',
                title: '',
                date: '',
                location: '',
                bullet1: '',
                bullet2: '',
                bullet3: ''
            }
        ],
        hidden: false
        
    },
    education: {
        school: 'University of Alaska',
        date: '2013-2017',
        degree: 'BS, Computer Science',
        location: 'Anchorage, AK',
        bullet1: 'Mauris sit amet neque imperdiet, cursus nisl id, blandit risus',
        bullet2: 'Relevant coursework: Web Design, Programming, Jousting, Ice-Fishing, Data Analytics',
        bullet3: '',
        hidden: false
    },
    other: {
        skills: {
            text: 'Quisque sodales, nibh et, elementum volutpat, sit amet sollicitudin nisi, sed ullamcorper augue. Integer velit felis, pulvinar vel orci ut, aliquam cursus sapien.',
            hidden: false
        },
        interests: {
            text: 'Nulla eget justo laoreet, convallis metus sed, rutrum mauris. Mauris ut tempor elit, sit amet fringilla tellus. Vestibulum ultricies dui in diam vulputate sodales. In hac habitasse platea dictumst.',
            hidden: false
        } 
    }
};