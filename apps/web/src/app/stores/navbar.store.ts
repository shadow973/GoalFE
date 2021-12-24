import { Injectable } from '@angular/core';

@Injectable()

export class NavbarStore {

    private _navbarItemsDesktop = [
        // {
        //     id: '1326',
        //     slug: 'european-championship',
        //     name: 'ევრო 2020',
        //     type: 'league',
        //     featured: true
        // },
        {
            id: '1',
            name: 'ახალი ამბები',
            slug: 'akhali-ambebi',
            type: 'cat',
        },
        {
            id: '8',
            name: 'ქართული',
            slug: 'saqartvelo',
            hasChidren: true,
            type2: 'geo',
            type: 'cat',
            opened: false,
            class: 'fa fa-angle-down',
            children: [
                {
                    id: '18692',
                    name: 'ეროვ. ნაკრები',
                    slug: 'georgia',
                    type: 'club',
                },
                {
                    id: '319',
                    slug: 'crystalbet-erovnuli-liga',
                    name: 'ეროვ. ლიგა',
                    type: 'league'
                },
                {
                    id: '316',
                    slug: 'erovnuli-liga-2',
                    name: 'ეროვ. ლიგა 2',
                    type: 'league'
                },
                {
                    id: '18',
                    slug: 'legionerebi',
                    name: 'ლეგიონერები',
                    type: 'cat'
                },
            ],
            clubs: [
                {
                    img: 'https://cdn.sportmonks.com/images//soccer/teams/27/3451.png',
                    id: '3451',
                    slug: 'dinamo-tbilisi',
                    name: 'დინამო თბილისი'
                },
                {
                    img: 'https://cdn.sportmonks.com/images//soccer/teams/22/5686.png',
                    id: '5686',
                    slug: 'dinamo-batumi',
                    name: 'დინამო ბათუმი'
                },
                {
                    img: 'https://cdn.sportmonks.com/images//soccer/teams/24/6392.png',
                    id: '6392',
                    slug: 'saburtalo',
                    name: 'საბურთალო'
                },

                {
                    img: 'https://cdn.sportmonks.com/images//soccer/teams/10/6250.png',
                    id: '6250',
                    slug: 'lokomotivi',
                    name: 'ლოკომოტივი'
                },
                {
                    img: 'https://cdn.sportmonks.com/images//soccer/teams/0/3936.png',
                    id: '3936',
                    slug: 'chikhura',
                    name: 'ჩიხურა'
                },
            ],
            clubs2: [
                {
                    img: 'https://cdn.sportmonks.com/images//soccer/teams/15/2671.png',
                    id: '2671',
                    slug: 'torpedo-kuraisi',
                    name: 'ტორპედო ქუთაისი'
                },

                {
                    img: 'https://cdn.sportmonks.com/images//soccer/teams/20/9780.png',
                    id: '9780',
                    slug: 'telavi',
                    name: 'თელავი'
                },
                {
                    img: 'https://cdn.sportmonks.com/images//soccer/teams/20/9716.png',
                    id: '9716',
                    slug: 'norchi-dinamo',
                    name: 'მერანი თბ'
                },
                {
                    img: 'https://cdn.sportmonks.com/images//soccer/teams/17/5489.png',
                    id: '5489',
                    slug: 'samtredia',
                    name: 'სამტრედია'
                },
                {
                    img: 'https://cdn.sportmonks.com/images//soccer/teams/18/5490.png',
                    id: '5490',
                    slug: 'dila',
                    name: 'დილა'
                },
            ]
        },
        {
            id: '22222',
            name: 'ჩემპიონატები',
            slug: 'championatebi',
            hasChidren: true,
            type: 'other',
            opened: false,
            class: 'fa fa-angle-down',
            top_leagues: {
                part_1: [
                    {
                        img: '2.png',
                        id: '2',
                        slug: 'champions-league',
                        name: 'ჩემპიონთა ლიგა'

                    },
                    {
                        img: '5.png',
                        id: '5',
                        slug: 'europa-league',
                        name: 'ევროპა ლიგა'
                    },
                    {
                        img: '119.svg',
                        id: '319',
                        slug: 'crystalbet-erovnuli-liga',
                        name: 'ეროვნული ლიგა'
                    },
                    {
                        img: '462.svg',
                        id: '8',
                        slug: 'premier-league',
                        name: 'პრემიერ ლიგა '
                    },
                    {
                        img: '32.svg',
                        id: '564',
                        slug: 'la-liga',
                        name: 'ლა ლიგა'
                    },
                    {
                        img: '251.svg',
                        id: '384',
                        slug: 'serie-a',
                        name: 'სერია ა'
                    },
                    {
                        img: '11.svg',
                        id: '82',
                        slug: 'bundesliga',
                        name: 'ბუნდესლიგა'
                    },
                    {
                        img: '17.svg',
                        id: '301',
                        slug: 'ligue-1',
                        name: 'ლიგა 1'
                    },
                    {
                        img: '38.svg',
                        id: '72',
                        slug: 'eredivisie',
                        name: 'ერედივიზია'
                    },
                ],
                part_2: [

                    {
                        img: '227.svg',
                        id: '486',
                        slug: 'premier-league',
                        name: 'პრემიერ ლიგა'
                    },
                    {
                        img: '20.svg',
                        id: '462',
                        slug: 'primeira-liga',
                        name: 'პრიმეირა ლიგა'
                    },
                    {
                        img: '86.svg',
                        id: '609',
                        slug: 'premier-league',
                        name: 'პრიმეირ ლიგა'
                    },
                    {
                        img: '404.svg',
                        id: '603',
                        slug: '1-lig',
                        name: 'სუპერ ლიგა'
                    },
                    {
                        img: '5.svg',
                        id: '648',
                        slug: 'serie-a',
                        name: 'სერია ა'
                    },
                    {
                        img: '44.svg',
                        id: '636',
                        slug: 'superliga',
                        name: 'სუპერლიგა '
                    },
                    {
                        img: '732.jpg',
                        id: '732',
                        slug: 'world-cup',
                        name: 'მსოფლიო ჩემპიონატი'
                    },
                    {
                        img: '41.png',
                        id: '1326',
                        slug: 'european-championship',
                        name: 'ევროპის ჩემპიონატი'
                    },
                    {
                        img: '1538.png',
                        id: '1538',
                        slug: 'uefa-nations-league',
                        name: 'ერთა ლიგა'
                    },
                ]
            },
        },
        {
            id: '33333',
            name: 'გუნდები',
            slug: 'gundebi',
            hasChidren: true,
            type: 'other',
            opened: false,
            class: 'fa fa-angle-down',
            top_teams: {
                part_1: [
                    {
                        img: 'https://cdn.sportmonks.com/images//soccer/teams/9/9.png',
                        id: '9',
                        slug: 'manchester-city',
                        name: 'მან. სიტი'
                    },
                    {
                        img: 'https://cdn.sportmonks.com/images//soccer/teams/14/14.png',
                        id: '14',
                        slug: 'manchester-united',
                        name: 'მან.იუნ'
                    },
                    {
                        img: 'https://cdn.sportmonks.com/images//soccer/teams/8/8.png',
                        id: '8',
                        slug: 'liverpool',
                        name: 'ლივერპული'
                    },
                    {
                        img: 'https://cdn.sportmonks.com/images//soccer/teams/18/18.png',
                        id: '18',
                        slug: 'chelsea',
                        name: 'ჩელსი'
                    },
                    {
                        img: 'https://cdn.sportmonks.com/images//soccer/teams/19/19.png',
                        id: '19',
                        slug: 'arsenal',
                        name: 'არსენალი'
                    },
                    {
                        img: 'https://cdn.sportmonks.com/images//soccer/teams/6/6.png',
                        id: '6',
                        slug: 'tottenham-hotspur',
                        name: 'ტოტენჰემი'
                    },
                    {
                        img: 'https://cdn.sportmonks.com/images//soccer/teams/21/629.png',
                        id: '629',
                        slug: 'ajax',
                        name: 'აიაქსი',
                    },
                    {
                        img: 'https://cdn.sportmonks.com/images//soccer/teams/15/591.png',
                        id: '591',
                        slug: 'paris-saint-germain',
                        name: 'პსჟ',
                    },
                    {
                        img: 'https://cdn.sportmonks.com/images//soccer/teams/12/652.png',
                        id: '652',
                        slug: 'porto',
                        name: 'პორტუ',
                    },
                ],
                part_2: [
                    {
                        img: 'https://cdn.sportmonks.com/images//soccer/teams/12/3468.png',
                        id: '3468',
                        slug: 'real-madrid',
                        name: 'რეალი'
                    },
                    {
                        img: 'https://cdn.sportmonks.com/images//soccer/teams/19/83.png',
                        id: '83',
                        slug: 'barcelona',
                        name: 'ბარსელონა'
                    },
                    {
                        img: 'https://cdn.sportmonks.com/images/soccer/teams/12/7980.png',
                        id: '7980',
                        slug: 'atletico-madrid',
                        name: 'ატლეტიკო'
                    },
                    {
                        img: 'https://cdn.sportmonks.com/images//soccer/teams/4/676.png',
                        id: '676',
                        slug: 'sevilla',
                        name: 'სევილია'
                    },
                    {
                        img: 'https://cdn.sportmonks.com/images//soccer/teams/22/214.png',
                        id: '214',
                        slug: 'valencia',
                        name: 'ვალენსია'
                    },
                    {
                        img: 'https://cdn.sportmonks.com/images//soccer/teams/17/625.png',
                        id: '625',
                        slug: 'juventus',
                        name: 'იუვენტუსი'
                    },
                    {
                        img: 'https://cdn.sportmonks.com/images//soccer/teams/21/597.png',
                        id: '597',
                        slug: 'napoli',
                        name: 'ნაპოლი'
                    },

                    {
                        img: 'https://cdn.sportmonks.com/images//soccer/teams/15/79.png',
                        id: '79',
                        slug: 'olympique-lyonnais',
                        name: 'ლიონი',
                    },
                    {
                        img: 'https://cdn.sportmonks.com/images//soccer/teams/29/605.png',
                        id: '605',
                        slug: 'benfica',
                        name: 'ბენფიკა',
                    },

                ],
                part_3: [
                    {
                        img: 'https://cdn.sportmonks.com/images//soccer/teams/17/113.png',
                        id: '113',
                        slug: 'milan',
                        name: 'მილანი',
                    },
                    {
                        img: 'https://cdn.sportmonks.com/images//soccer/teams/18/2930.png',
                        id: '2930',
                        slug: 'inter',
                        name: 'ინტერი',
                    },
                    {
                        img: 'https://cdn.sportmonks.com/images//soccer/teams/5/37.png',
                        id: '37',
                        slug: 'roma',
                        name: 'რომა',
                    },
                    {
                        img: 'https://cdn.sportmonks.com/images//soccer/teams/11/43.png',
                        id: '43',
                        slug: 'lazio',
                        name: 'ლაციო',
                    },
                    {
                        img: 'https://cdn.sportmonks.com/images//soccer/teams/23/503.png',
                        id: '503',
                        slug: 'bayern-munchen',
                        name: 'ბაიერნი',
                    },
                    {
                        img: 'https://cdn.sportmonks.com/images//soccer/teams/4/68.png',
                        id: '68',
                        slug: 'borussia-dortmund',
                        name: 'დორტმუნდი',
                    },
                    {
                        img: 'https://cdn.sportmonks.com/images//soccer/teams/3/67.png',
                        id: '67',
                        slug: 'schalke-04',
                        name: 'შალკე 04',
                    },
                    {
                        img: 'https://cdn.sportmonks.com/images//soccer/teams/5/6789.png',
                        id: '6789',
                        slug: 'monaco',
                        name: 'მონაკო',
                    },
                    {
                        img: 'https://cdn.sportmonks.com/images//soccer/teams/12/44.png',
                        id: '44',
                        slug: 'olympique-marseille',
                        name: 'მარსელი',
                    },

                ]
            }
        },
        {
            id: '',
            name: 'ვიდეოები',
            slug: 'videos',
            type: 'page',
            hasPage: true
        },
        {
            id: '3',
            name: 'ტრანსფერები',
            slug: 'transferebi',
            type: 'cat'
        },
        {
            id: '5',
            name: 'ბლოგი',
            slug: 'blogi',
            type: 'cat'
        },
        {
            id: '',
            name: 'ანგარიშები',
            slug: 'livescore',
            type: 'page',
            featured: true
        },
        {
            id: '',
            name: 'ჩემი გუნდი',
            slug: 'my-teams',
            type: 'page'
        },
        {
            id: '',
            name: 'ცხრილები',
            slug: 'cxrilebi',
            type: 'page',
            featured: true
        }
    ];

    constructor() { }

    getDesktopNavbarItems(): any[] {
        return this._navbarItemsDesktop;
    }

}
