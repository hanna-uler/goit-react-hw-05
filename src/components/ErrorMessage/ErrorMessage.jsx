import css from './ErrorMessage.module.css'
import { TbFaceIdError } from "react-icons/tb";

export default function ErrorMessage() {
    return (
        <div className={css.errorBox}>
            <strong><TbFaceIdError /> Oops, something went wrong. Try again.</strong>
        </div>
    )
}