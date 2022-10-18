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
    { jobTitle: 'Carpenter\'s Assistant @ HGF Furniture', descrip: ['Originally volunteered during the first lockdown before being employed full-time.', 'Responsible for running foodbank sessions', 'Managing teams of volunteers to ensure an efficient and caring service for each of the many people in need.', 'Managing the warehouse (sourcing food, keeping stocks high, receiving and sorting large deliveries)'] },
    { jobTitle: 'Student @ General Assembly', descrip: ['worked on projects ranging from...'] },
    { jobTitle: 'Rider @ Freddie\'s Flowers', descrip: ['Delivering flowers via cargo bike to subscribed customers.'] },
    { jobTitle: 'Team Leader / Warehouse Manager @ Spring Community Hub', descrip: ['Originally volunteered during the first lockdown before being employed full-time.', 'Responsible for running foodbank sessions', 'Managing teams of volunteers to ensure an efficient and caring service for each of the many people in need.', 'Managing the warehouse (sourcing food, keeping stocks high, receiving and sorting large deliveries)'] }
  ]

  console.log(data[0].jobTitle.split('@'))

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
                <h3><span className='job-title'>{item.jobTitle.split('@')[0]}</span> @ {item.jobTitle.split('@')[1]}</h3>
                <div className='plusminus-container'>
                  {activeKey === index ?
                    <img className='plusminus' src={minus} />
                    :
                    <img className='plusminus' src={plus} />
                  }
                </div>
              </CustomToggle>
              <Accordion.Collapse eventKey={index}>
                <Card.Body>{item.descrip.map((line, index) => <p key={index}>{line}</p>)}</Card.Body>
              </Accordion.Collapse>
              {activeKey === index && <hr className='exp-hr'/>}
            </Card>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default Experience