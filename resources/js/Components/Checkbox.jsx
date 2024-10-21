export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded text-blue-600 shadow-sm ' +
                className
            }
        />
    );
}
