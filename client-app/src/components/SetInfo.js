import { FaIdBadge } from "react-icons/fa"

export default function SetInfo({ set }) {
  // console.log(set)
  return <>
  <h5 className="mt-5">Set Information</h5>
  <ul className="list-group">
    <li className="list-group-item">
        <FaIdBadge className="icon" /> {set.name}
    </li>

  </ul>
  </>
}