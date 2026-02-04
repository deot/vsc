set -e

if [[ -z $1 ]]; then
	echo "Enter new version: "
	read VERSION
	echo
	read -p "Releasing v$VERSION - are you sure? (y/n)" -n 1 -r
else
	VERSION=$1
	REPLY=y
fi

if [[ $REPLY =~ ^[Yy]$ ]]; then
	echo "Releasing v$VERSION ..."

	# build 
	VERSION=$VERSION pnpm run compile

	# version
	npm version $VERSION --no-git-tag-version 

	# package
	npx @vscode/vsce package

	# publish
	# npx @vscode/vsce login deot
	npx @vscode/vsce publish

	# commit
	git add -A
	git commit -m "[build] v$VERSION"
	# push
	# git push origin refs/tags/v$VERSION
	git push origin main
fi
