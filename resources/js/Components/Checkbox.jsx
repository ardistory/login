export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded text-purple-500 shadow-sm ' +
                className
            }
        />
    );
}
