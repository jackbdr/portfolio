import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'
import Card from 'react-bootstrap/Card'

import plus from '../images/plus-redo.png'
import minus from '../images/minus-redo.png'

const Experience = () => {

  const CustomToggle = ({ children, eventKey, handleClick }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () => {
      handleClick()
    })

    return (
      <div
        type='button'
        className='custom-acc-header'
        onClick={decoratedOnClick}
      >
        {children}
      </div>
    )
  }

  const [activeKey, setActiveKey] = useState(0)

  const data = [
    { jobTitle: 'Carpenter\'s Assistant', descrip: 'worked on projects ranging from...' },
    { jobTitle: 'Team Leader / Warehouse Manager', descrip: 'Originally volunteered during the first lockdown before being employed full-time. Responsible for running foodbank sessions' },
    { jobTitle: 'Freddie\'s Flowers Rider', descrip: 'Delivering flowers via cargo bike to subscribed customers.' }
  ]

  return (
    <section id='experience'>
      <div className='experience-content flex-center'>
        <h2 className='experience-head section-head'>Experience</h2>
        <Accordion className='' defaultActiveKey={0} activeKey={activeKey}>
          {data.map((item, index) => (
            <Card key={index}>
              <CustomToggle
                as={Card.Header}
                eventKey={index}
                handleClick={() => {
                  if (activeKey === index) {
                    setActiveKey(null)
                  } else {
                    setActiveKey(index)
                  }
                }}
              >
                {item.jobTitle}
                {activeKey === index ?
                  <img className='plusminus' src={minus} />
                  :
                  <img className='plusminus' src={plus} />
                }
              </CustomToggle>
              <Accordion.Collapse eventKey={index}>
                <Card.Body>{item.descrip}</Card.Body>
              </Accordion.Collapse>
              {/* <hr className='exp-hr'/> */}
            </Card>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default Experience