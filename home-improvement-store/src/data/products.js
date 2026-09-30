import drill from "../assets/images/drill.jpg";
import hammer from "../assets/images/hammer.jpg";
import screwdriver from "../assets/images/screwdriver.jpg";
import ledBulb from "../assets/images/led-bulb.jpg";
import extensionBoard from "../assets/images/extension-board.jpg";
import smartSwitch from "../assets/images/smart-switch.jpg";
import faucet from "../assets/images/faucet.jpg";
import showerHead from "../assets/images/shower-head.jpg";
import pvcPipe from "../assets/images/pvc-pipe.jpg";

const products = [
    {
        id: 1,
        name: "Cordless Drill",
        category: "Tools",
        price: 4299,
        rating: 4.5,
        description: "20V cordless drill for home projects",
        image: drill
    },
    {
        id: 2,
        name: "Claw Hammer",
        category: "Tools",
        price: 799,
        rating: 4.3,
        description: "Strong steel hammer for everyday use",
        image: hammer
    },
    {
        id: 3,
        name: "Screwdriver Set",
        category: "Tools",
        price: 1199,
        rating: 4.6,
        description: "Multi-size screwdriver set",
        image: screwdriver
    },
    {
        id: 4,
        name: "LED Bulb",
        category: "Electrical",
        price: 299,
        rating: 4.4,
        description: "Energy efficient LED bulb",
        image: ledBulb
    },
    {
        id: 5,
        name: "Extension Board",
        category: "Electrical",
        price: 699,
        rating: 4.2,
        description: "Extension board with multiple sockets",
        image: extensionBoard
    },
    {
        id: 6,
        name: "Smart Light Switch",
        category: "Electrical",
        price: 1499,
        rating: 4.5,
        description: "Smart switch for home lighting",
        image: smartSwitch
    },
    {
        id: 7,
        name: "Kitchen Faucet",
        category: "Plumbing",
        price: 2499,
        rating: 4.6,
        description: "Modern faucet for kitchen sinks",
        image: faucet
    },
    {
        id: 8,
        name: "Shower Head",
        category: "Plumbing",
        price: 1299,
        rating: 4.3,
        description: "Water-saving shower head",
        image: showerHead
    },
    {
        id: 9,
        name: "PVC Pipe Set",
        category: "Plumbing",
        price: 899,
        rating: 4.1,
        description: "PVC pipe set for basic plumbing work",
        image: pvcPipe
    }
];

export default products;