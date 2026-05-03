import {Controller} from "react-hook-form";
import TextField from "@mui/material/TextField";

export function AmountInputField({name, control, value, error, onValueChange}) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <TextField
                    {...field}
                    value={value}
                    onChange={(event) => {
                        const nextValue = event.target.value;
                        field.onChange(nextValue);
                        onValueChange(nextValue);
                    }}
                    error={!!error}
                    helperText={error?.message}
                    slotProps={{
                        htmlInput: {
                            maxLength: 8,
                            inputMode: 'numeric',
                        },
                    }}
                    sx={{
                        maxWidth: '220px',
                        '& .MuiInputBase-input': {
                            color: 'var(--color-brand-text)',
                        },
                    }}
                />
            )}
        />
    )
}