const AllPhotos = [];
AllPhotos['AnimalPhotos'] = [];
AllPhotos['InfoPhotos'] = [];
AllPhotos['PlacesPhotos'] = [];
AllPhotos['Universe'] = [];

for(var i = 1; i < 14; i++) { AllPhotos['AnimalPhotos'].push({ id:i, src:'Animal (' + i + ').jpg' }) };
for(var i = 1; i < 10; i++) { AllPhotos['InfoPhotos'].push({ id:i, src:'Info(' + i + ').jpg' }) };
for(var i = 1; i < 73; i++) { AllPhotos['PlacesPhotos'].push({ id:i, src:'Place (' + i + ').jpg' }) };
for(var i = 1; i < 51; i++) { AllPhotos['Universe'].push({ id:i, src:'Universe (' + i + ').jpg' }) };

export default AllPhotos;
