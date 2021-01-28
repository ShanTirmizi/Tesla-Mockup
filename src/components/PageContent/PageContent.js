import React from 'react';
import './PageContent.css';
import Button from '../Button/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const PageContent = ({ title, description, descriptionLink, img, btn1, btn1Link, btn2, btn2Link, doubleBtn, first }) => {
    return (
        <div className='pageContent' style={{backgroundImage: `url(${img})`}}>
            <div className='pageContent__container'>
                <div className="pageContent__info">
                    <p>{title}</p>
                    <div className="pageContent__info__des">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="pageContent__bottom">
                    <div className="pageContent__bottom__btn">
                        <Button imp='primary' text={btn1} link={btn1Link} />
                        { doubleBtn && (
                            <Button imp='secondary' text={btn2} link={btn2Link} />
                        )}
                    </div>
                    {
                        first && (
                            <div className="pageContent__expand">
                                <ExpandMoreIcon />
                            </div>
                        )
                    }
                </div>
            </div>
            
        </div>
    )
}

export default PageContent
