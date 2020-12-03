
const AllPhotos = [];
AllPhotos['AnimalPhotos'] = [];
AllPhotos['InfoPhotos'] = [];
AllPhotos['PlacesPhotos'] = [];
AllPhotos['SpacePhotos'] = [];

for(var a = 1; a < 14; a++) { AllPhotos['AnimalPhotos'].push({ id:a, src:'Animal (' + a + ').jpg' }) };
for(var b = 1; b < 10; b++) { AllPhotos['InfoPhotos'].push({ id:b, src:'Info (' + b + ').jpg' }) };
for(var c = 1; c < 73; c++) { AllPhotos['PlacesPhotos'].push({ id:c, src:'Place (' + c + ').jpg' }) };
for(var c = 1; c < 50; c++) { AllPhotos['SpacePhotos'].push({ id:c, src:'Space (' + c + ').jpg' }) };

export default AllPhotos;
