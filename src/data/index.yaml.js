import { Document } from 'yaml';

import culture from './data/culture.yaml';
import sports from './data/sports.yaml';
import stem from './data/stem.yaml';

export function GET() {
	const index = [].concat(culture, sports, stem);
	const indexDoc = new Document(index);
	indexDoc.commentBefore = 'The complete Fireflame index';
	return String(indexDoc);
}