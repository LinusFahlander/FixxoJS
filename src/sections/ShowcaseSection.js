import React from 'react'

const ShowcaseSection = () => {
  return (
    <section className="showcase">
        <div className="container">
            <img className="fr-1" src="https://win22imgstorage.blob.core.windows.net/images/showcase-img-1.png" alt="Left placeholder"/>
            <div className="showcase-info fr-1">
                <h1>Sale Up</h1>
                <h1>To 50% Off</h1>
                <p>Online shopping free home delivery over $100</p>
                <a className="btn-theme" href="#">
                    <span className="corner-left"></span>
                    SHOP NOW
                    <span className="corner-right"></span>
                </a>
            </div>
            <img className="fr-1" src="https://win22imgstorage.blob.core.windows.net/images/showcase-img-2.png" alt="Right placeholder"/>
        </div>
    </section>
  )
}

export default ShowcaseSection