import angular from '../assets/images/icons/angular.png';
import css from '../assets/images/icons/css.png';
import docker from '../assets/images/icons/docker.png';
import express from '../assets/images/icons/express.png';
import figma from '../assets/images/icons/figma.png';
import git from '../assets/images/icons/git.png';
import github from '../assets/images/icons/github.png';
import gitlab from '../assets/images/icons/gitlab.png';
import graphql from '../assets/images/icons/graphql.png';
import html from '../assets/images/icons/html.png';
import jira from '../assets/images/icons/jira.png';
import js from '../assets/images/icons/js.png';
import laravel from '../assets/images/icons/laravel.png';
import mongodb from '../assets/images/icons/mongo.png';
import nest from '../assets/images/icons/nest.png';
import next from '../assets/images/icons/next.png';
import nodejs from '../assets/images/icons/nodejs.png';
import php from '../assets/images/icons/php.png';
import react from '../assets/images/icons/react.png';
import tailwind from '../assets/images/icons/tailwind.png';
import ts from '../assets/images/icons/ts.png';
import "../styles/Carrousel.css";

function Carrousel() {

    const logos = [
        html, css, js, ts, angular, react, next,
        nodejs, nest, express,
        php, laravel,
    ];

    const secLogos = [
        figma, jira, git, github, gitlab, docker, mongodb, graphql, tailwind,
    ]

    return (
        <>
            <div className="carousel-wrapper">
                <div className="carousel-track">
                    {[...logos, ...logos, ...logos].map((logo, i) => (
                        <div key={i} className="carousel-item">
                            <img src={logo} alt={`logo-${i}`} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="carousel-wrapper">
                <div className="carousel-track-reverse">
                    {[...secLogos, ...secLogos, ...secLogos].map((logo, i) => (
                        <div key={i} className="carousel-item">
                            <img src={logo} alt={`logo-${i}`} />
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
}

export default Carrousel