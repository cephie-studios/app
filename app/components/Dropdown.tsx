import React, { useState, useRef, useEffect } from 'react';

interface DropdownProps {
	label: string;
	icon?: React.ReactNode;
	options: { label: string; value: string }[];
	value?: string;
	onChange?: (e: { target: { name: string; value: string } }) => void;
	name?: string;
	id?: string;
	className?: string;
	required?: boolean;
}

export default function Dropdown({
	label,
	icon,
	options,
	value,
	onChange,
	name = '',
	id = '',
	className = '',
	required = false
}: DropdownProps) {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const selectedOption =
		options.find((opt) => opt.value === value) || options[0];

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () =>
			document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const handleSelect = (optionValue: string) => {
		if (onChange) {
			onChange({
				target: {
					name,
					value: optionValue
				}
			});
		}
		setIsOpen(false);
	};

	return (
		<div className={`space-y-2 ${className}`} ref={dropdownRef}>
			<label
				htmlFor={id || name}
				className="flex items-center text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1 font-montserrat"
			>
				{icon && <span className="mr-2 text-blue-500">{icon}</span>}
				{label}
			</label>
			<div className="relative">
				<button
					type="button"
					onClick={() => setIsOpen(!isOpen)}
					className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all font-montserrat text-zinc-900 cursor-pointer flex items-center justify-between text-left"
					aria-haspopup="listbox"
					aria-expanded={isOpen}
				>
					<span>{selectedOption?.label}</span>
					<div
						className={`text-zinc-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
					>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</div>
				</button>

				{isOpen && (
					<div className="absolute z-50 w-full mt-2 bg-white border border-zinc-200 rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
						<div
							role="listbox"
							className="py-2 max-h-60 overflow-y-auto"
						>
							{options.map((option) => (
								<button
									key={option.value}
									type="button"
									onClick={() => handleSelect(option.value)}
									className={`w-full px-5 py-3 text-left font-montserrat transition-colors hover:bg-zinc-100 flex items-center justify-between ${
										option.value === value
											? 'text-blue-600 bg-blue-100/50'
											: 'text-zinc-700'
									}`}
									role="option"
									aria-selected={option.value === value}
								>
									{option.label}
									{option.value === value && (
										<svg
											className="w-4 h-4"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											/>
										</svg>
									)}
								</button>
							))}
						</div>
					</div>
				)}
				<input
					type="hidden"
					name={name}
					value={value}
					required={required}
				/>
			</div>
		</div>
	);
}
