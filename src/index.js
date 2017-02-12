import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import classNames from 'classnames'
import './style.scss'

export default class Pager extends Component {

    render() {

        const {
            itemCount,
            currentPage,
            itemsPerPage,
            changePage,
            theme
        } = this.props

        let pageCount = Math.ceil(itemCount/itemsPerPage)
        let showPrevious = currentPage !== 1
        let showNext = pageCount > currentPage
        let numbers = [...Array(pageCount).keys()]

        let themeClasses = {light: theme === 'light', dark: theme === 'dark'}
        let classes = classNames('pagingItem', themeClasses)

        return (
            <div className='paging'>

                {showPrevious &&
                <div className={classes} onClick={(e) => changePage(currentPage-1)}>&lt;</div>
                }

                {pageCount > 1 && numbers.map(x => {
                    let pageClasses = classNames('pagingItem', {current: x+1 === currentPage}, themeClasses)
                    return ( 
                        <div key={x} className={pageClasses} onClick={(e) => changePage(x+1)}>
                            {x+1}
                        </div>
                    )
                })}

                {showNext &&
                <div className={classes} onClick={(e) => changePage(currentPage+1)}>&gt;</div>
                }

            </div>
        )
    }
}


Pager.propTypes = {
    itemCount: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    changePage: PropTypes.func.isRequired,
    theme: PropTypes.string.isRequired
}
