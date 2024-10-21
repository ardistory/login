export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p {...props} className={'text-xs text-white bg-red-500/30 px-2 rounded-lg ' + className}>
            {message}
        </p>
    ) : null;
}
