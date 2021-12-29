import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

const JoinPage = () => {
  const clubs = useSelector(state => state.clubs);
  const { id } = useParams();

  const [name, setName] = useState('')
  const [room] = useState(clubs[id].clubTitle)

  return (
    <div className="join__wrapper">
      <div className="join__container">
        <h1 className="join__heading">Join</h1>
        <div>
          <input
            placeholder="Enter your name"
            className="join__input"
            type="text"
            onChange={(event) =>
              setName(event.target.value)
            }
          />
        </div>
        <Link
          onClick={(event) =>
            !name || !room ? event.preventDefault() : null
          }
          to={{
            pathname: "/chat",
            search: `?name=${name}&room=${room}`,
            state: {
              bookImage: clubs[id].bookImage,
              bookTitle: clubs[id].bookTitle,
              clubTime: clubs[id].clubTime
            }
          }}
        >
          <button
            className="join__button mt-20"
            type="submit"
          >
            Join
          </button>
        </Link>
      </div>
    </div>
  )
}

export default JoinPage
