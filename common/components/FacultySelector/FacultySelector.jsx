import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'
import faculties from '@/data/faculties.json'

export default function FacultySelector({
    className = '',
    value = 0,
    onSelect = () => {},
    ...rest
}) {
    return (
        <Form.Select
            required
            className={className}
            onChange={(event) => onSelect(parseInt(event.target.value, 10))}
            value={value}
            {...rest}
        >
            <option value={0} disabled hidden>
                Выберите факультет
            </option>
            {faculties.map((faculty) => (
                <option id={faculty.id} key={faculty.id} value={faculty.id}>
                    {faculty.name}
                </option>
            ))}
        </Form.Select>
    )
}

FacultySelector.propTypes = {
    className: PropTypes.string,
    value: PropTypes.number,
    onSelect: PropTypes.func,
}

FacultySelector.defaultProps = {
    className: '',
    value: 0,
    onSelect: () => {},
}
