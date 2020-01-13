import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import MainNavigation from "./main-navigation"
import SocialNavigation from "./social-navigation"

export default () => {
    const pageData = useStaticQuery(
        graphql`
        query Header {
            site {
                siteMetadata {
                    title
                    aboutMeIntro
                    socialMedia {
                        name
                        url
                    }
                }
            }    
        }`
    )

    return (
        <div className="sidebar pure-u-1 pure-u-md-1-4">
            <div className="header">
                <h1 className="main-title">{pageData.site.siteMetadata.name}</h1>
                <h2 className="main-tagline">{pageData.site.siteMetadata.title}</h2>
                <p>{pageData.site.siteMetadata.aboutMeIntro}</p>

                <MainNavigation />
                <SocialNavigation socialMedia={pageData.site.siteMetadata.socialMedia} />
            </div>
        </div>
    )
}
