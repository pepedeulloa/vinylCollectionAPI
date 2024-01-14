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

export class NotValidDataError extends Error {
	constructor(message = 'Received data not valid, must be text') {
		super(message);
		this.name = 'NotValidDataError';
	}
}