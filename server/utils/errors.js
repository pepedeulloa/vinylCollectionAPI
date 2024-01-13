export class ResourceNotFoundError extends Error {
	constructor(message = 'Resource not found') {
		super(message);
		this.name = 'ResourceNotFoundError';
	}
}

export class IdentifierNotValidError extends Error {
	constructor(message = 'Received identifier not valid, must be an integer') {
		super(message);
		this.name = 'IdentifierNotValidError';
	}
}