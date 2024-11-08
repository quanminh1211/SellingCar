import YearIcon from '../../assets/img/YearIcon.svg'
import wheelIcon from '../../assets/img/WheelIcon.svg'
import petrolIcon from '../../assets/img/petrolIcon.svg'
import peopleIcon from '../../assets/img/peopleIcon.svg'
import AnhCar1 from '../../assets/img/anhCar1.svg'
import AnhCar2 from '../../assets/img/anhCar2.svg'
import AnhCar3 from '../../assets/img/anhCar3.svg'
import AnhCar4 from '../../assets/img/anhCar4.svg'
import AnhCar5 from '../../assets/img/anhCar5.svg'
import AnhCar6 from '../../assets/img/anhCar6.svg'
import AnhCar7 from '../../assets/img/anhCar7.svg'
import AnhCar8 from '../../assets/img/anhCar8.svg'
import ImgCarReview1 from '../../assets/img/ImgReview1..svg'
import ImgCarReview2 from '../../assets/img/ImgReview2..svg'
import Avarta from '../../assets/img/avarta.svg'
import Star from '../../assets/img/Starvote..svg'


const CarItemList = [
    {
        id: 1,
        imgItem: AnhCar1,
        status: "New",
        nameItem: "Tesla Model 3 Standard Range Plus",
        price: '$56,690',
        location:"Florida,USA",
        year: 2020,
        yearIcon: YearIcon,
        wheelDriveIcon: wheelIcon,
        wheelDrive:'Rear-wheel Drive',
        petrolIcon: petrolIcon,
        petrol:'Electric',
        peopleIcon: peopleIcon,
        people: 5,
        Star: Star
    },
    {
        id: 2,
        imgItem: AnhCar2,
        status: "New",
        nameItem: 'Ford F-250 Super Duty',
        price: '$82,098',
        location:"Milan, Italy",
        year: 2021,
        yearIcon:YearIcon,
        wheelDriveIcon:wheelIcon,
        wheelDrive:'Four-wheel Drive',
        petrolIcon:petrolIcon,
        petrol:'Diesel',
        peopleIcon:peopleIcon,
        people: 5,
        Star: Star

    },
    {
        id: 3,
        imgItem: AnhCar3,
        status: "New",
        nameItem: 'Honda Pilot Touring 7-Passenger',
        price: "$43,735",
        location:"Caracas, Venezuela",
        year: 2021,
        yearIcon:YearIcon,
        wheelDriveIcon:wheelIcon,
        wheelDrive:'All-wheel Drive',
        petrolIcon:petrolIcon,
        petrol:'Gasoline',
        peopleIcon:peopleIcon,
        people: 7,
        Star: Star

    },
    {
        id: 4,
        imgItem: AnhCar4,
        status: "New",
        nameItem: 'Chevrolet Equinox LS',
        price: '$17,987',
        location:"Madrid, Spain",
        year: 2017,
        yearIcon:YearIcon,
        wheelDriveIcon:wheelIcon,
        wheelDrive:'Front-wheel Drive',
        petrolIcon:petrolIcon,
        petrol:'Gasoline',
        peopleIcon:peopleIcon,
        people: 5,
        Star: Star

    },
    {
        id: 5,
        imgItem: AnhCar5,
        status: "New",
        nameItem: 'Kia Sorento S',
        price: '$29,791',
        location:"Bangkok, Thailand",
        year: 2021,
        yearIcon:YearIcon,
        wheelDriveIcon:wheelIcon,
        wheelDrive:'Front-wheel Drive',
        petrolIcon:petrolIcon,
        petrol:'Gasoline',
        peopleIcon:peopleIcon,
        people: 7,
        Star: Star

    },
    {
        id: 6,
        imgItem: AnhCar6,
        status: "New",
        nameItem: 'MINI Clubman Cooper S',
        price: '$35,850',
        location:"Jakarta, Indonesia",
        year: 2022,
        yearIcon:YearIcon,
        wheelDriveIcon:wheelIcon,
        wheelDrive:'Front-wheel Drive',
        petrolIcon:petrolIcon,
        petrol:'Gasoline',
        peopleIcon:peopleIcon,
        people: 5,
        Star: Star

    },
    {
        id: 7,
        imgItem: AnhCar7,
        status: "Used",
        nameItem: 'Jeep Wrangler Unlimited Islander',
        price: '$50,370',
        location:"San Antonio, USA",
        year: 2021,
        yearIcon:YearIcon,
        wheelDriveIcon:wheelIcon,
        wheelDrive:'Four-wheel Drive',
        petrolIcon:petrolIcon,
        petrol:'Hybrid',
        peopleIcon:peopleIcon,
        people: 5,
        Star: Star

    },
    {
        id: 8,
        imgItem: AnhCar8,
        status: "Used",
        nameItem: 'Audi e-tron Premium',
        price: '$72,655',
        location:"Suwon, South Korea",
        year: 2021,
        yearIcon:YearIcon,
        wheelDriveIcon:wheelIcon,
        wheelDrive:'All-wheel Drive',
        petrolIcon:petrolIcon,
        petrol:'Electric',
        peopleIcon:peopleIcon,
        people: 5,
        Star: Star

    },
    // {
    //     id: 9,
    //     imgItem: "",
    //     status: "Used",
    //     nameItem: 'Land Rover Range Rover Velar R-Dynamic S',
    //     price: '$75,790',
    //     location:"Jeddah, Saudi Arabia",
    //     year: 2021,
    //     yearIcon:'',
    //     wheelDriveIcon:"",
    //     wheelDrive:'All-wheel Drive',
    //     petrolIcon:'',
    //     petrol:'Gasoline',
    //     peopleIcon:'',
    //     people: 5
    // },
    // {
    //     id: 10,
    //     imgItem: "",
    //     status: 200000,
    //     nameItem: 'https://toyota-global.com/content/dam/toyota/global/en/home/toyota-camry/overview/toyota-camry-overview-hero-image.jpg',
    //     price: 'A powerful, comfortable and stylish car.',
    //     location:"",
    //     year: '',
    //     yearIcon:'',
    //     wheelDriveIcon:"",
    //     wheelDrive:'',
    //     petrolIcon:'',
    //     petrol:'',
    //     peopleIcon:'',
    //     people: ''
    // },
    // {
    //     id: 11,
    //     imgItem: "",
    //     status: 200000,
    //     nameItem: 'https://toyota-global.com/content/dam/toyota/global/en/home/toyota-camry/overview/toyota-camry-overview-hero-image.jpg',
    //     price: 'A powerful, comfortable and stylish car.',
    //     location:"",
    //     year: '',
    //     yearIcon:'',
    //     wheelDriveIcon:"",
    //     wheelDrive:'',
    //     petrolIcon:'',
    //     petrol:'',
    //     peopleIcon:'',
    //     people: ''
    // },
    // {
    //     id: 12,
    //     imgItem: "",
    //     status: 200000,
    //     nameItem: 'https://toyota-global.com/content/dam/toyota/global/en/home/toyota-camry/overview/toyota-camry-overview-hero-image.jpg',
    //     price: 'A powerful, comfortable and stylish car.',
    //     location:"",
    //     year: '',
    //     yearIcon:'',
    //     wheelDriveIcon:"",
    //     wheelDrive:'',
    //     petrolIcon:'',
    //     petrol:'',
    //     peopleIcon:'',
    //     people: ''
    // },
    // {
    //     id: 13,
    //     imgItem: "",
    //     status: 200000,
    //     nameItem: 'https://toyota-global.com/content/dam/toyota/global/en/home/toyota-camry/overview/toyota-camry-overview-hero-image.jpg',
    //     price: 'A powerful, comfortable and stylish car.',
    //     location:"",
    //     year: '',
    //     yearIcon:'',
    //     wheelDriveIcon:"",
    //     wheelDrive:'',
    //     petrolIcon:'',
    //     petrol:'',
    //     peopleIcon:'',
    //     people: ''
    // },
    // {
    //     id: 14,
    //     imgItem: "",
    //     status: 200000,
    //     nameItem: 'https://toyota-global.com/content/dam/toyota/global/en/home/toyota-camry/overview/toyota-camry-overview-hero-image.jpg',
    //     price: 'A powerful, comfortable and stylish car.',
    //     location:"",
    //     year: '',
    //     yearIcon:'',
    //     wheelDriveIcon:"",
    //     wheelDrive:'',
    //     petrolIcon:'',
    //     petrol:'',
    //     peopleIcon:'',
    //     people: ''
    // },
    // {
    //     id: 15,
    //     imgItem: "",
    //     status: 200000,
    //     nameItem: 'https://toyota-global.com/content/dam/toyota/global/en/home/toyota-camry/overview/toyota-camry-overview-hero-image.jpg',
    //     price: 'A powerful, comfortable and stylish car.',
    //     location:"",
    //     year: '',
    //     yearIcon:'',
    //     wheelDriveIcon:"",
    //     wheelDrive:'',
    //     petrolIcon:'',
    //     petrol:'',
    //     peopleIcon:'',
    //     people: ''
    // }
]

const CompareCarList = [
    {
        id: 7,
        imgItem: AnhCar7,
        status: "Used",
        nameItem: 'Jeep Wrangler Unlimited Islander',
        price: '$50,370',
        location:"San Antonio, USA",
        year: 2021,
        yearIcon:YearIcon,
        wheelDriveIcon:wheelIcon,
        wheelDrive:'Four-wheel Drive',
        petrolIcon:petrolIcon,
        petrol:'Hybrid',
        peopleIcon:peopleIcon,
        people: 5
    },
    {
        id: 8,
        imgItem: AnhCar8,
        status: "Used",
        nameItem: 'Audi e-tron Premium',
        price: '$72,655',
        location:"Suwon, South Korea",
        year: 2021,
        yearIcon:YearIcon,
        wheelDriveIcon:wheelIcon,
        wheelDrive:'All-wheel Drive',
        petrolIcon:petrolIcon,
        petrol:'Electric',
        peopleIcon:peopleIcon,
        people: 5
    }
]

const InfoReview = [
    {
        id: 1,
        imgReview : ImgCarReview1,
        nameReview:'Tesla',
        nameUser: 'John Doe',
        avatar: Avarta ,
        dateReview: "May, 25 2022",
        textReview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        id: 2,
        imgReview : ImgCarReview2,
        nameReview:'BMW',
        nameUser: 'Jane Doe',
        avatar: Avarta ,
        dateReview: "May, 15 2020",
        textReview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        id: 3,
        imgReview : ImgCarReview2,
        nameReview:'Mercedes',
        nameUser: 'Michael Doe',
        avatar: Avarta ,
        dateReview: "April, 30 2021",
        textReview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        id: 4,
        imgReview : ImgCarReview1,
        nameReview:'Vinfast',
        name: 'Sarah Doe',
        avatar: Avarta ,
        dateReview: "April, 20 2022",
        textReview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
]

export {CarItemList, CompareCarList, InfoReview} 