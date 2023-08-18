import React, { useState } from 'react';

interface IQuestionnaire {
    handleSetExperienceTypes: (value: string) => void;
    handleSetRange: (value: string) => void;
    reset: () => void;
    submit: () => void;
    selectedExperience: string[];
}

function useQuestionnaire(): IQuestionnaire {
    const [selectedExperience, setExperience] = useState<string[]>([]);
    const [range, setRange] = useState<[number,number]>([0,0]);

    const handleSetExperienceTypes = (value: string) => {
        if(selectedExperience.includes(value)) {
            const newSelected = selectedExperience.filter(exp => exp !== value)
            setExperience(newSelected)
            return;
        }

            const newSelected = [...selectedExperience]
            newSelected.push(value)
            setExperience(newSelected)
    }

    const handleSetRange = (value: string) => {
        const newRange: number[] = value.split(",").map(el => Number(el))
        setRange([newRange[0], newRange[1]]);
    }

    const reset = () => {
        setExperience([])
        setRange([0,0]);
    }

    const submit = () => {
        if(!selectedExperience || !selectedExperience.length) alert("Please tell us about your tutoring experience")
        const payload = { experienceType: selectedExperience, experienceRange: range }
        console.log(payload)
    }

    return { handleSetExperienceTypes, handleSetRange, reset, submit, selectedExperience };
  }

export default useQuestionnaire;