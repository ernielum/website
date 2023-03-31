import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
    // {
    //     original: "images/kaiser-permanente-logo.jpg",
    //     thumbnail: "images/kaiser-permanente-logo.jpg",
    //     description: "Inpatient Pharmacy Intern, 2019 - current",
    //     originalHeight: '450px',
    // },
    // {
    //     original: "images/takeda-logo.jpg",
    //     thumbnail: "images/takeda-logo.jpg",
    //     description: "Medicinal Chemistry Intern, 2017 - 2019",
    //     originalHeight: '450px',
    // },
    {
        original: "images/ernie-ucsd-graduate.jpg",
        thumbnail: "images/ernie-ucsd-graduate.jpg",
        description: "UCSD Graduation Photoshoot, 2019",
        originalHeight: '450px',
    },
    // {
    //     original: "images/ernie-gilead-research.jpg",
    //     thumbnail: "images/ernie-gilead-research.jpg",
    //     description: "Poster Presentation at the The Liver Meeting 2022",
    //     originalHeight: '450px',
    // },
    {
        original: "images/ernie-ucsf-graduate.jpg",
        thumbnail: "images/ernie-ucsf-graduate.jpg",
        description: "UCSF School of Pharmacy Graduation Photoshoot, 2022",
        originalHeight: '450px',
    },
    {
        original: "images/ernie-cshp.jpg",
        thumbnail: "images/ernie-cshp.jpg",
        description: "UCSF Quiz Bowl Team, CSHP 2022",
        originalHeight: '450px',
    },
    {
        original: "images/ernie-esports.jpg",
        thumbnail: "images/ernie-esports.jpg",
        description: "Tespa Collegiate Series, 2017",
        originalHeight: '450px',
    },
    {
        original: "images/ernie-donner-lake.jpg",
        thumbnail: "images/ernie-donner-lake.jpg",
        description: "Donner Lake",
        originalHeight: '450px',
    },
    {
        original: "images/ernie-tahoe.jpg",
        thumbnail: "images/ernie-tahoe.jpg",
        description: "Lake Tahoe",
        originalHeight: '450px',
    },
    {
        original: "images/ernie-hawaii-zipline.jpg",
        thumbnail: "images/ernie-hawaii-zipline.jpg",
        description: "Ziplining in Hawaii",
        originalHeight: '450px',
    },
]

function GalleryPage() {
    return (
        <>
            <h2>Gallery</h2>
                <article class="gallery">
                    <ImageGallery items={images}></ImageGallery>
                </article>
        </>
    );
}

export default GalleryPage;