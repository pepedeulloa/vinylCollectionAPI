export const errorHandler = (err, req, res, next) => {

	if (err.name === 'IdentifierNotValidError') return res.status(400).json({
		error: 'Identificador non válido'
	});
	else if (err.name === 'ResourceNotFoundError') return res.status(404).json({
		error: 'Non se atopou o vinilo.'
	});
	else return res.status(500).json({ error: 'Erro no servidor.' });

}; 