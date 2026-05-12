import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import {Control, Path, useController} from "react-hook-form";
import type {QuestionsFormValues} from "../../schemas/zodSchema";

type FormSelectProps = {
    name: Path<QuestionsFormValues>;
    control: Control<QuestionsFormValues>;
    placeholder?: string;
    arrayItem?: string[];
};

export function FormSelect({ name, control, placeholder, arrayItem }: FormSelectProps) {
    const {
        field,
        fieldState: { error },
    } = useController({ name, control });
    return (
        <FormControl fullWidth error={!!error}>
            <Select
                {...field}
                sx={{width:'100%', height:'40px'}}
                displayEmpty
                value={field.value || ''}
                renderValue={(selected) =>
                    selected ? selected : <span className="text-brand-text">{placeholder}</span>
                }
            >
                <MenuItem disabled value="">
                    <span>{placeholder}</span>
                </MenuItem>
                {arrayItem?.map((item) => (
                    <MenuItem key={item} value={item}>{item}</MenuItem>
                ))}
            </Select>
            <FormHelperText>{error?.message}</FormHelperText>
        </FormControl>
    )
}