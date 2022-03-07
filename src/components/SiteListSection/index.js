import React from 'react'
import { BsCircleFill } from 'react-icons/bs';
import { ListColumn, ListContainer, ListRow, SiteCategory, SiteCategoryLabel, SiteContainer, SiteCreatedAt, SiteCreatedLabel, SiteImg, SiteName, SiteNameLabel, SiteState, SiteStateLabel, VisitPage } from './SiteListElements';

const SiteList = ({to, id, img, name, created_at, state, category, order}) => {
    return (
        <>
            <a href={to} style = {{textDecoration: 'none'}}>
                <SiteContainer id={id}>
                    <ListContainer>
                        <ListRow>
                            <ListColumn lg={6}>
                                <SiteImg src={img} />
                            </ListColumn>
                            <ListColumn lg={3} xs={6} >
                                <SiteNameLabel>Site Name:</SiteNameLabel>
                                <SiteName>{name}</SiteName>
                                <SiteCreatedLabel>Created At:</SiteCreatedLabel>
                                <SiteCreatedAt>{created_at}</SiteCreatedAt>
                            </ListColumn>
                            <ListColumn lg={3} xs={6}>
                            <SiteStateLabel>State: <br /></SiteStateLabel>
                                <SiteState><BsCircleFill className="online"/> {state} </SiteState>
                                <SiteCategoryLabel>Category: <br /></SiteCategoryLabel>
                                <SiteCategory>Website</SiteCategory>
                                <VisitPage>Go to Website</VisitPage>
                            </ListColumn>
                        </ListRow>
                    </ListContainer>
                </SiteContainer>
            </a>   
        </>
    )
}

export default SiteList
